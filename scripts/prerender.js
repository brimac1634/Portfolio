const fs = require('fs/promises');
const path = require('path');
const http = require('http');
const { chromium } = require('playwright');
const routes = require('../src/routes.json');
const origin = 'https://bmacpherson.com';
const build = path.resolve(__dirname, '../build');
const mime = { '.js': 'application/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.gif': 'image/gif', '.ico': 'image/x-icon', '.json': 'application/json' };

async function main() {
  const shell = await fs.readFile(path.join(build, 'index.html'));
  // The render server serves the original app shell only for known routes.
  const server = http.createServer(async (req, res) => {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    if (routes.some(route => route.path === pathname) || pathname === '/404') {
      res.setHeader('Content-Type', 'text/html');
      return res.end(shell);
    }
    const file = path.resolve(build, '.' + decodeURIComponent(pathname));
    if (!file.startsWith(build + path.sep)) { res.writeHead(404); return res.end(); }
    try {
      const data = await fs.readFile(file);
      res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
      res.end(data);
    } catch { res.writeHead(404); res.end(); }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  let browser;
  try {
    browser = await chromium.launch();
    const base = `http://127.0.0.1:${server.address().port}`;
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
    await context.addInitScript(() => { window.__PRERENDER__ = true; });
    // Build output must never depend on analytics, fonts, or remote media.
    await context.route('**/*', route => route.request().url().startsWith(base + '/') ? route.continue() : route.abort());
    for (const route of [...routes, { path: '/404', title: 'Page Not Found | Brian MacPherson' }]) {
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(base + route.path, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForFunction(expected => {
        const heading = document.querySelector('#root h1');
        return document.documentElement.dataset.routeReady === expected.path &&
          document.title === expected.title && heading && heading.textContent.trim() &&
          document.querySelector('#root').textContent.trim().length > 100;
      }, route, { timeout: 15000 });
      // Local images only; broken images cannot silently become published snapshots.
      await page.waitForFunction(() => [...document.images].every(img => img.complete && img.naturalWidth > 0), null, { timeout: 15000 });
      if (errors.length) throw new Error(`${route.path}: ${errors.join('; ')}`);
      const issues = await page.evaluate(({ route, origin, paths }) => {
        const failures = [];
        if (document.querySelectorAll('h1').length !== 1) failures.push('expected one h1');
        if (route.path !== '/404' && document.querySelector('link[rel="canonical"]')?.href !== origin + route.path) failures.push('incorrect canonical');
        if (document.querySelector('video, iframe')) failures.push('remote embed present');
        for (const link of document.querySelectorAll('a[href]')) {
          const url = new URL(link.href);
          if (url.origin === location.origin && !paths.includes(url.pathname)) failures.push(`invalid internal link ${url.pathname}`);
        }
        document.documentElement.setAttribute('data-snapshot', '');
        document.documentElement.removeAttribute('data-route-ready');
        return failures;
      }, { route, origin, paths: routes.map(entry => entry.path) });
      if (issues.length) throw new Error(`${route.path}: ${issues.join('; ')}`);
      const file = path.join(build, route.path === '/' ? 'index.html' : route.path.slice(1) + '.html');
      await fs.mkdir(path.dirname(file), { recursive: true });
      await fs.writeFile(file, await page.content());
      console.log(`Prerendered ${route.path}`);
      await page.close();
    }
    await fs.writeFile(path.join(build, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + routes.filter(route => route.sitemap).map(route => `  <url><loc>${origin}${route.path}</loc></url>`).join('\n') + '\n</urlset>\n');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });

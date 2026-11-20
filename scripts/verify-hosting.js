// Run against the Firebase Hosting emulator after yarn build.
const assert = require('assert/strict');
const fs = require('fs/promises');
const { chromium } = require('playwright');
const routes = require('../src/routes.json');
const base = process.env.HOSTING_URL || (process.env.FIREBASE_HOSTING_EMULATOR_HOST && `http://${process.env.FIREBASE_HOSTING_EMULATOR_HOST}`) || 'http://127.0.0.1:5000';

async function main() {
  const browser = await chromium.launch();
  try {
    for (const javaScriptEnabled of [false, true]) {
      for (const width of [390, 1440]) {
        const context = await browser.newContext({ javaScriptEnabled, viewport: { width, height: 900 } });
        const page = await context.newPage();
        // Third-party availability is not required for route/content verification.
        await page.route('**/*', route => new URL(route.request().url()).origin === new URL(base).origin ? route.continue() : route.abort());
        for (const route of routes) {
          const response = await page.goto(base + route.path);
          assert.equal(response.status(), 200, route.path);
          if (javaScriptEnabled) await page.waitForFunction(path => document.documentElement.dataset.routeReady === path, route.path);
          assert.equal(await page.title(), route.title);
          assert.equal(await page.locator('h1').count(), 1);
          assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://bmacpherson.com' + route.path);
          assert.ok((await page.locator('#root').innerText()).length > 100);
          assert.equal(await page.locator('meta[name="description"]').getAttribute('content'), route.description);
          assert.ok(await page.locator('h1').isVisible());
          if (!javaScriptEnabled) {
            assert.equal(await page.locator('iframe,video').count(), 0);
            for (const element of await page.locator('.enter, .card .text, .work-item .details').all()) {
              assert.equal(await element.evaluate(el => getComputedStyle(el).opacity), '1');
            }
          }
          if (['/', '/projects', '/about', '/projects/BreatheCalm'].includes(route.path)) {
            await page.screenshot({ path: `/private/tmp/portfolio-${route.path.replace(/\//g, '_') || 'home'}-${width}-${javaScriptEnabled}.png`, fullPage: true, animations: 'disabled' });
          }
        }
        for (const path of ['/missing', '/about/extra', '/projects/missing', '/projects/SpentAll/privacy-policy', '/projects/BreatheCalm/extra']) {
          const response = await page.goto(base + path);
          assert.equal(response.status(), 404, path);
          assert.equal(await page.locator('h1').innerText(), 'Page not found');
          assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'), 'noindex,follow');
        }
        if (javaScriptEnabled) {
          await page.goto(base + '/projects');
          await page.locator('a.work-item[href="/projects/BreatheCalm"]').click();
          await page.waitForFunction(() => document.title === 'Breathe Calm | Brian MacPherson');
          assert.equal(await page.locator('.video').count(), 1);
          await page.reload();
          assert.equal(await page.title(), 'Breathe Calm | Brian MacPherson');
          await page.goBack();
          await page.waitForFunction(() => document.title === 'Projects | Brian MacPherson');
          await page.goForward();
          await page.waitForFunction(() => document.title === 'Breathe Calm | Brian MacPherson');
        }
        await context.close();
        console.log(`Verified all routes: ${width}px, JavaScript ${javaScriptEnabled ? 'on' : 'off'}`);
      }
    }
    for (const route of routes.filter(route => route.path !== '/')) {
      const response = await fetch(base + route.path + '/', { redirect: 'manual' });
      assert.equal(response.status, 301);
      assert.equal(new URL(response.headers.get('location'), base).pathname, route.path);
    }
    const previewContext = await browser.newContext();
    const previewPage = await previewContext.newPage();
    const failedAssets = [];
    previewPage.on('response', response => {
      if (response.url().startsWith(base) && response.status() >= 400) failedAssets.push(response.url());
    });
    for (const suffix of ['', '/']) {
      await previewPage.goto(base + '/previews/sjrec2rec' + suffix);
      assert.equal(new URL(previewPage.url()).pathname, '/previews/sjrec2rec/');
      await previewPage.locator('a.review-card').first().click();
      await previewPage.waitForLoadState('load');
      assert.ok(new URL(previewPage.url()).pathname.startsWith('/previews/sjrec2rec/'));
    }
    assert.deepEqual(failedAssets, [], 'preview relative assets');
    await previewContext.close();
    const sitemap = await (await fetch(base + '/sitemap.xml')).text();
    const entries = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
    assert.deepEqual(entries, routes.filter(route => route.sitemap).map(route => 'https://bmacpherson.com' + route.path));
    for (const path of ['/previews/sjrec2rec/', '/previews/sjrec2rec']) {
      const response = await fetch(base + path);
      assert.equal(response.status, 200);
      assert.equal(response.headers.get('x-robots-tag'), 'noindex, nofollow');
    }
    // Check every preview file, including relative assets, survived the build.
    async function checkPreviews(directory) {
      for (const entry of await fs.readdir('public/' + directory, { withFileTypes: true })) {
        const file = directory + '/' + entry.name;
        if (entry.isDirectory()) await checkPreviews(file);
        else {
          const response = await fetch(base + '/' + file);
          assert.equal(response.status, 200, file);
          if (file.endsWith('.html')) assert.match(await response.text(), /noindex\s*,\s*nofollow/i, file);
        }
      }
    }
    await checkPreviews('previews');
    console.log('Verified redirects, sitemap, preview files, and indexing headers.');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });

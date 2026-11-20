import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../../routes.json';

export const origin = 'https://bmacpherson.com';

const Metadata = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const route = routes.find(entry => entry.path === path);
    const title = route ? route.title : 'Page Not Found | Brian MacPherson';
    const description = route ? route.description : 'This page could not be found. Explore Brian MacPherson’s portfolio and projects.';
    document.title = title;
    const setMeta = (attribute, name, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    setMeta('name', 'description', description);
    setMeta('name', 'robots', route ? 'index,follow' : 'noindex,follow');
    ['og', 'twitter'].forEach(prefix => {
      const attribute = prefix === 'og' ? 'property' : 'name';
      setMeta(attribute, `${prefix}:title`, title);
      setMeta(attribute, `${prefix}:description`, description);
      setMeta(attribute, `${prefix}:image`, `${origin}/logo512.png`);
    });
    setMeta('property', 'og:type', 'website');
    setMeta('name', 'twitter:card', 'summary');
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (route) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = origin + route.path;
      setMeta('property', 'og:url', origin + route.path);
    } else {
      if (canonical) canonical.remove();
      const ogUrl = document.head.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.remove();
    }
    document.documentElement.dataset.routeReady = pathname;
  }, [pathname]);
  return null;
};

export default Metadata;

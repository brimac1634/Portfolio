import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';
import routes from './routes.json';

jest.mock('./components/floaters-container/floaters-container.component', () => () => null);
jest.mock('./components/video/video.component', () => () => <div data-testid='video' />);
jest.mock('react-responsive', () => ({ children, minWidth }) => minWidth >= 768 ? null : children);

const visit = path => {
  const history = createMemoryHistory({ initialEntries: [path] });
  render(<Router history={history}><App /></Router>);
  return history;
};

test.each(routes)('$path has one heading and unique route metadata', route => {
  visit(route.path);
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  expect(document.title).toBe(route.title);
  expect(document.querySelector('link[rel="canonical"]').href).toBe('https://bmacpherson.com' + route.path);
  expect(document.querySelector('meta[name="description"]').content).toBe(route.description);
});

test.each(['/missing', '/about/extra', '/projects/unknown', '/projects/BreatheCalm/extra', '/projects/SpentAll/privacy-policy', '/projects/breathecalm'])('%s shows a noindex 404', path => {
  visit(path);
  expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  expect(document.querySelector('link[rel="canonical"]')).toBeNull();
  expect(document.querySelector('meta[name="robots"]').content).toBe('noindex,follow');
});

test('cards have crawlable links before images load and update metadata on navigation', () => {
  visit('/projects');
  const card = screen.getByRole('link', { name: /Breathe Calm/ });
  expect(card).toHaveAttribute('href', '/projects/BreatheCalm');
  expect(screen.queryByRole('link', { name: /Bon Vivant/ })).toBeNull();
  fireEvent.click(card);
  expect(document.title).toBe('Breathe Calm | Brian MacPherson');
  fireEvent.click(screen.getByRole('link', { name: 'here' }));
  expect(document.title).toBe('Breathe Calm Privacy Policy | Brian MacPherson');
});

test('normalizes known trailing slash paths and preserves search and hash', () => {
  const history = visit('/projects/BreatheCalm/?source=test#details');
  expect(history.location.pathname).toBe('/projects/BreatheCalm');
  expect(history.location.search).toBe('?source=test');
  expect(history.location.hash).toBe('#details');
});

test('registry metadata is unique and includes only listed routes in sitemap', () => {
  expect(new Set(routes.map(route => route.title)).size).toBe(routes.length);
  expect(new Set(routes.map(route => route.description)).size).toBe(routes.length);
  expect(routes.filter(route => route.sitemap)).toHaveLength(12);
  expect(routes.find(route => route.work === 'BonVivantCollection').sitemap).toBe(false);
});

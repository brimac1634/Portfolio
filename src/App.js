import React, { Suspense } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive'; 

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import WorkNav from './components/nav/work-nav.component';
import AboutNav from './components/nav/about-nav.component';
import SocialButtons from './components/social-buttons/social-buttons.component';
import Loader from './components/loader/loader.component';
import Home from './pages/home/home.component';
import Work from './pages/work/work.component';
import About from './pages/about/about.component';

import routes from './routes.json';
import Metadata from './components/metadata/metadata.component';
import NotFound from './pages/not-found/not-found.component';
import WorkDetail from './pages/work-detail/work-detail.component';
import PrivacyPolicy from './pages/privacy-policy/privacy-policy.component';

import './App.scss';

const App = ({ location }) => {
  return (
    <div className='App'>
      <Metadata />
      {
        location.pathname !== '/about' &&
        <div className='side-panel' />
      }
      <MediaQuery minWidth={992}>
        <Footer />
      </MediaQuery>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Switch>
              {routes.map(route => (
                <Route exact sensitive strict key={route.path} path={route.path} render={() => {
                  if (route.kind === 'home') return <Home />;
                  if (route.kind === 'projects') return <Work />;
                  if (route.kind === 'about') return <About />;
                  if (route.kind === 'privacy') return <PrivacyPolicy match={{ params: { work: 'BreatheCalm' } }} />;
                  return <WorkDetail match={{ params: { work: route.work } }} location={location} />;
                }} />
              ))}
              <Route render={() => {
                const normalized = location.pathname.replace(/\/+$/, '') || '/';
                return normalized !== location.pathname && routes.some(route => route.path === normalized)
                  ? <Redirect to={{ ...location, pathname: normalized }} />
                  : <NotFound />;
              }} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
      <MediaQuery maxWidth={991} minWidth={768}>
        {
          location.pathname !== '/' &&
          <div className='bottom-panel'>
            <SocialButtons />
          </div>
        }
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <div className='bottom-panel'>
          <SocialButtons />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={991}>
        <Footer />
      </MediaQuery>
      {
        location.pathname === '/' &&
        <MediaQuery minWidth={992}>
          <div className='nav-box top'>
            <WorkNav />
          </div>
          <div className='nav-box bottom'>
            <AboutNav />
          </div>
        </MediaQuery>
      }
      <Header />
    </div>
  );
}

export default withRouter(App);

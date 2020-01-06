import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MediaQuery from 'react-responsive'; 

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SocialButtons from './components/social-buttons/social-buttons.component';
import Loader from './components/loader/loader.component';
import Home from './pages/home/home.component';
import Work from './pages/work/work.component';
import About from './pages/about/about.component';

import './App.scss';

const App = () => {
  return (
    <div className='App' >
      <div className='side-panel' />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/work' component={Work}/>
              <Route path='/about' component={About}/>
              <Redirect to='/' />
          </Switch>
        </Suspense>
      </ErrorBoundary>
      <MediaQuery maxWidth={991}>
        <div className='bottom-panel'>
          <SocialButtons />
        </div>
      </MediaQuery>
      <Footer />
      <Header />
    </div>
  );
}

export default App;

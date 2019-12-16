import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Header from './components/header/header.component';
import Loader from './components/loader/loader.component';
// import ParallaxSpring from './components/parallax-spring/parallax-spring.component';
import Home from './pages/home/home.component';

import './App.scss';

const App = () => {
  return (
    <div className="App" >
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Redirect to='/' />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

import './index.css';
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>
, document.getElementById('root'));

serviceWorker.register()
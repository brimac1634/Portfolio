import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './nav.styles.scss';

const AboutNav = ({ location }) => {
	const path = location.pathname.split('/')[1];
	return (
		<Link 
			to='/about' 
			className={`nav ${path === 'about' ? 'selected' : null}`}
		>
			about
		</Link>
	)
}
export default withRouter(AboutNav);
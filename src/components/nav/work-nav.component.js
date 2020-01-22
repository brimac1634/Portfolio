import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './nav.styles.scss';

const WorkNav = ({ location }) => {
	const path = location.pathname.split('/')[1];
	return (
		<Link 
			to='/work' 
			className={`nav ${path === 'work' ? 'selected' : null}`}
		>
			work
		</Link>
	)
}
export default withRouter(WorkNav);
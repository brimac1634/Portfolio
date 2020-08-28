import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './nav.styles.scss';

const WorkNav = ({ location }) => {
	const path = location.pathname.split('/')[1];
	return (
		<Link 
			to='/projects' 
			className={`nav ${path === 'projects' ? 'selected' : null}`}
		>
			projects
		</Link>
	)
}
export default withRouter(WorkNav);
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive'; 

import SocialButtons from '../social-buttons/social-buttons.component';

import './footer.styles.scss';

const Footer = ({ location }) => {
	const path = location.pathname.split('/')[1];
	return (
		<div className='footer'>
			<Link to='/work' className={`nav ${path === 'work' ? 'selected' : null}`}>
				work
			</Link>
			<MediaQuery minWidth={992}>
				<SocialButtons vertical />
			</MediaQuery>
			<Link to='/about' className={`nav ${path === 'about' ? 'selected' : null}`}>
				about
			</Link>
		</div>
	)
}

export default withRouter(Footer);
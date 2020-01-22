import React from 'react';
import { withRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive'; 

import { useWindowSize } from '../../utils';

import SocialButtons from '../social-buttons/social-buttons.component';
import WorkNav from '../nav/work-nav.component';
import AboutNav from '../nav/about-nav.component';

import './footer.styles.scss';

const Footer = ({ location }) => {
	const [innerWidth] = useWindowSize();
	const hideNav = location.pathname === '/' && innerWidth > 991;
	return (
		<div className={`footer ${location.pathname === '/' ? 'is-home' : null}`}>
			{
				!hideNav &&
				<WorkNav />
			}
			{
				location.pathname !== '/' &&
				<MediaQuery minWidth={992}>
					<SocialButtons vertical />
				</MediaQuery>
			}
			{
				!hideNav &&
				<AboutNav />
			}
		</div>
	)
}

export default withRouter(Footer);
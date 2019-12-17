import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { ReactComponent as GithubLogo } from '../../assets/github.svg'
import { ReactComponent as LinkedInLogo } from '../../assets/linkedin.svg'
import { ReactComponent as FacebookLogo } from '../../assets/facebook.svg'

import './footer.styles.scss';

const Footer = ({ location }) => {
	const path = location.pathname.split('/')[1];
	return (
		<div className='footer'>
			<Link to='/work'>
				<span className={`nav ${path === 'work' ? 'selected' : null}`}>work</span>
			</Link>
			<div className='social'>
				<a 
					className='social-button'
					href='https://github.com/brimac1634' 
					target='_blank' 
					rel='noopener noreferrer'
				>
					<GithubLogo />
				</a>
				<a 
					className='social-button'
					href='https://www.linkedin.com/in/brian-macpherson-414b6126/' 
					target='_blank' 
					rel='noopener noreferrer'
				>
					<LinkedInLogo />
				</a>
				<a 
					className='social-button'
					href='https://www.facebook.com/brimac1634' 
					target='_blank' 
					rel='noopener noreferrer'
				>
					<FacebookLogo />
				</a>
			</div>
			<Link to='/about'>
				<span className={`nav ${path === 'about' ? 'selected' : null}`}>about</span>
			</Link>
		</div>
	)
}

export default withRouter(Footer);
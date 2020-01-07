import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { ReactComponent as MailLogo } from '../../assets/email.svg'

import './header.styles.scss';

const Header = ({ location }) => (
	<div className={`header ${location.pathname === '/' ? 'is-home' : null}`}>
		<Link to='/' className='name'>
			<span>BRIAN</span>
			<span>MAC</span>
			<span>PHERSON</span>
		</Link>
		<a 
			className='action-button'
			href='mailto:brimac1634@gmail.com' 
			target='_blank' 
			rel='noopener noreferrer'
		>
			<MailLogo />
		</a>
	</div>
)

export default withRouter(Header);
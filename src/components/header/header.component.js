import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MailLogo } from '../../assets/email.svg'

import './header.styles.scss';

const Header = () => (
	<div className='header'>
		<Link to='/' className='name'>
			<span>BRIAN</span>
			<span>MACPHERSON</span>
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

export default Header;
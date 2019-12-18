import React from 'react';

import { ReactComponent as GithubLogo } from '../../assets/github.svg'
import { ReactComponent as LinkedInLogo } from '../../assets/linkedin.svg'
import { ReactComponent as FacebookLogo } from '../../assets/facebook.svg'

import './social-button.styles.scss';

const SocialButtons = ({ vertical }) => (
	<div className={`social-buttons ${vertical ? 'vertical' : null}`}>
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
)
export default SocialButtons;
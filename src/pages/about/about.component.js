import React from 'react';

import './about.styles.scss';

const About = () => (
	<div className='about'>
		<p className='intro'>
			Hi, I'm Brian MacPherson.
			<br />A Full-Stack Developer
			<br />based in Hong Kong
		</p>
		<p className='interest'>
			Interested in working together? 
			<br />I'm always open to collaborations.
			<br />Don't hesitate to contact me!
		</p>
		<div className='contact'>
			<div className='row'>
				<span>Email</span>
				<a 
					href='mailto:brimac1634@gmail.com' 
					target='_blank' 
					rel='noopener noreferrer'
				>
					Brimac1634@gmail.com
				</a>
			</div>
			<div className='row'>
				<span>Phone</span>
				<a href='tel:+852-6897-2280'>+852-6897-2280</a>
			</div>
		</div>
	</div>
)

export default About;
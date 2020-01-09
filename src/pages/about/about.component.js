import React from 'react';

import './about.styles.scss';

const About = () => (
	<div className='about'>
		<div className='content'>
			<p className='intro'>
				Hi, I'm Brian MacPherson.
				<br />A Full-Stack Developer
				<br />based in Hong Kong
			</p>
			<p className='details'>
				I was born and raised in New York where I eventually attended university at Stony Brook, receiving degrees in Finance and Spanish Literature. It was there that I learned of my obsession with efficiency and automation, ultimately leading me to become a programmer. Today, I live and work in Hong Kong as a Project Manager/Fullstack Developer, having moved here after university. 
				<br />
				<br />
				I have an immense passion for learning new skills, problem solving, and building beautiful experiences. When I'm not working on a project, I'm digging into the latest technologies, so that I can make well informed decisions for future projects.
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
	</div>
)

export default About;
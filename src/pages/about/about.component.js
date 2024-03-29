import React from 'react';
import MediaQuery from 'react-responsive';

import monitor_400 from '../../assets/monitor_400.gif';
import monitor_800 from '../../assets/monitor_800.gif';
import './about.styles.scss';

const About = () => (
	<div className='about'>
		<div className='content'>
			<p className='intro'>
				Hi, I'm Brian MacPherson.
				<br />A fullstack developer
				<br />based in Hong Kong
			</p>
			<p className='details'>
				I have an obsession for learning, problem solving, automating, and building great projects. When I'm not working on a project, I'm digging into the latest technologies, so that I can make the best decisions for future projects.
			</p>
			<p className='interest'>
				Interested in working together? 
				<br />I'm always open to collaborations.
				<br />Don't hesitate to <span className='gold'>contact me</span>!
			</p>
			<MediaQuery maxWidth={767}>
				<div className='gif'>
					<img 
						src={monitor_800}
						srcSet={
							`${monitor_400} 400w,
							${monitor_800} 800w`
						}  
						alt='monitor' 
						className='monitor-gif' 
					/>
				</div>
			</MediaQuery>
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
					<a href='tel:+852-6708-1340'>+852-6708-1340</a>
				</div>
				<div className='row'>
					<a 
						href='https://noblewills.com' 
						target='_blank' 
						rel='noopener noreferrer'
					>
						Co-founder of NobleWills
					</a>
				</div>
			</div>
		</div>
		<MediaQuery minWidth={768}>
			<img 
				src={monitor_800}
				srcSet={
					`${monitor_400} 400w,
					${monitor_800} 800w`
				} 
				alt='monitor' 
				className='monitor-gif' 
			/>
		</MediaQuery>
	</div>
)

export default About;
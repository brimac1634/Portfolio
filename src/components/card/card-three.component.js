import React from 'react';

import { ReactComponent as SkillsLogo } from '../../assets/skills.svg'

import './card.styles.scss';

const CardThree = () => (
	<div className='card'>
		<div className='logo'>
			<SkillsLogo />
		</div>
		<div className='text-container'>
			<div className='text'>
				<h3>...with <span className='gold'>EXPERIENCE</span> in...</h3>
				<div className='dual-grid'>
					<span>Typescript/Javascript</span>
					<span>Python</span>
					<span>React/Gatsby/SSR</span>
					<span>Docker</span>
					<span>Git/CI/CD</span>
					<span>HTML/CSS</span>
					<span>SQL/NoSQL</span>
					<span>Flutter/Dart</span>
					<span>C#/.Net</span>
					<span>Swift/iOS</span>
				</div>
			</div>
		</div>
	</div>
)
export default CardThree;
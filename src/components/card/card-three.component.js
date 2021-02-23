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
					<span>React/Gatsby</span>
					<span>Node/Express</span>
					<span>Javascript/Typescript</span>
					<span>Docker</span>
					<span>CSS/SASS</span>
					<span>SQL/NoSQL</span>
					<span>CI/CD</span>
					<span>Flutter/Dart</span>
					<span>Git</span>
					<span>Swift/iOS</span>
				</div>
			</div>
		</div>
	</div>
)
export default CardThree;
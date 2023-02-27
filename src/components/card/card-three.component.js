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
					<span>C#/.Net</span>
					<span>Python</span>
					<span>React/Next/Gatsby</span>
					<span>Docker/Kubernetes</span>
					<span>Git/CI-CD</span>
					<span>HTML/CSS</span>
					<span>SQL/NoSQL</span>
					<span>Flutter/Dart</span>
					<span>Swift/iOS</span>
				</div>
			</div>
		</div>
	</div>
)
export default CardThree;
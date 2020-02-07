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
					<span>React/Redux</span>
					<span>Javascript</span>
					<span>CSS/SASS</span>
					<span>Node</span>
					<span>Testing</span>
					<span>SQL/NoSQL</span>
					<span>SSR/Next/Gatsby</span>
					<span>Swift/iOS</span>
					<span>Git/CI/CD</span>
					<span>Docker</span>
				</div>
			</div>
		</div>
	</div>
)
export default CardThree;
import React from 'react';

import { ReactComponent as PrioritiesLogo } from '../../assets/priorities.svg'

import './card.styles.scss';

const CardTwo = () => (
	<div className='card'>
		<div className='logo'>
			<PrioritiesLogo />
		</div>
		<div className='text-container'>
			<div className='text'>
				<h3>...who <span className='gold'>PRIORITIZES</span>...</h3>
				<div className='dual-grid spread'>
					<span>Fast Performance</span>
					<span>Responsive Layouts</span>
					<span>Intuitive Design</span>
					<span>Dynamic Content</span>
				</div>
			</div>
		</div>
	</div>
)
export default CardTwo;
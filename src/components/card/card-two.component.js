import React from 'react';

import { ReactComponent as PrioritiesLogo } from '../../assets/priorities.svg'

import './card.styles.scss';

const CardTwo = () => (
	<div className='card'>
		<div className='logo'>
			<PrioritiesLogo />
		</div>
		<div className='text'>
			<h3>...who <span className='gold'>PRIORITIZES</span>...</h3>
			<p>
				
			</p>
		</div>
	</div>
)
export default CardTwo;
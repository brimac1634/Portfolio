import React from 'react';

import { ReactComponent as HongKongLogo } from '../../assets/hong-kong.svg'

import './card.styles.scss';

const CardOne = () => (
	<div className='card'>
		<div className='logo'>
			<HongKongLogo />
		</div>
		<div className='text-container'>
			<div className='text'>
				<h2>Hi, I'm <span className='gold'>BRIAN</span>...</h2>
				<span>a New York born, Hong Kong based web and mobile developer...</span>
			</div>
		</div>
	</div>
)
export default CardOne;
import React from 'react';

import { ReactComponent as HongKongLogo } from '../../assets/hong-kong.svg'

import './card.styles.scss';

const CardOne = () => (
	<div className='card'>
		<div className='logo'>
			<HongKongLogo />
		</div>
		<div className='text'>
			<div className='first-line'>
				<h2>Hi, </h2>
				<h2>I'm </h2>
				<h2>Brian</h2>
				<h2>.</h2>
				<h2>.</h2>
				<h2>.</h2>
				<h3 className='bottom-line'>a Hong Kong based fullstack developer...</h3>
			</div>
		</div>
	</div>
)
export default CardOne;
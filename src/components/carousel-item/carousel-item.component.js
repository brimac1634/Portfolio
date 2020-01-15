import React from 'react';

import card from '../../assets/card.mp4';
import './carousel-item.styles.scss';

const CarouselItem = ({ isVisible, children }) => (
	<div className={`carousel-item ${isVisible ? 'show' : 'hide'}`}>
		<video autoPlay loop muted playsInline className='background-vid' >
			<source 
				src={card} 
				type='video/mp4'
			/> 
		</video>
		<div className={`inner-item ${isVisible ? 'show' : 'hide'}`}>
			{
				isVisible &&
				children
			}
		</div>
	</div>
)

export default CarouselItem;
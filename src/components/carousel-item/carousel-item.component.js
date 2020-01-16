import React from 'react';

import './carousel-item.styles.scss';

const CarouselItem = ({ isVisible, children }) => (
	<div className={`carousel-item ${isVisible ? 'show' : 'hide'}`}>
		<div className='background-vid' />
		<div className={`inner-item ${isVisible ? 'show' : 'hide'}`}>
			{
				isVisible &&
				children
			}
		</div>
	</div>
)

export default CarouselItem;
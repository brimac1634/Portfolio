import React from 'react';

import './carousel-item.styles.scss';

// <div className='image' style={{backgroundImage: `url(${image})`}} />

const CarouselItem = ({ isVisible, item }) => {
	const { image, title, description } = item;
	return (
		<div className={`carousel-item ${isVisible ? 'show' : 'hide'}`}>
			<div className='inner-item'>
				
				<div className={`title ${isVisible ? 'show' : 'hide'}`}>
					<h3>{title}</h3>
					<h3>{description}</h3>
				</div>
			</div>
		</div>
	)
}

export default CarouselItem;
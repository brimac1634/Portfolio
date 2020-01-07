import React from 'react';

import CarouselItem from '../../components/carousel-item/carousel-item.component';
import CardOne from '../../components/card-one/card-one.component';

const CarouselItemList = ({ allVisible, index }) => (
	<div className='carousel-item-list'>
		<CarouselItem isVisible={allVisible ? true : index === 0}>
			<CardOne />
		</CarouselItem>
		<CarouselItem isVisible={allVisible ? true : index === 1}>
			<CardOne />
		</CarouselItem>
		<CarouselItem isVisible={allVisible ? true : index === 2}>
			<CardOne />
		</CarouselItem>
	</div>
)
export default CarouselItemList;
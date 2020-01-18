import React, { Children } from 'react';

import CarouselItem from '../../components/carousel-item/carousel-item.component';
import Enter from '../../components/enter/enter.component';

import './carousel-item-list.styles.scss';

const CarouselItemList = ({ children }) => (
	<div className='carousel-item-list'>
		{
			Children.map(children, (child, i) => (
				<CarouselItem isVisible>
					{ child }
				</CarouselItem>
			))
		}
	</div>
)
export default CarouselItemList;
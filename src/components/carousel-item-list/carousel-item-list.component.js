import React, { Children } from 'react';

import CarouselItem from '../../components/carousel-item/carousel-item.component';
import SeeMore from '../see-more/see-more.component';
import Enter from '../../components/enter/enter.component';

import './carousel-item-list.styles.scss';

const CarouselItemList = ({ children }) => (
	<div className='carousel-item-list'>
		{
			Children.map(children, (child, i) => (
				<Enter enterStyle='fade-up' >
					<div className='item-container'>
						<CarouselItem isVisible>
							{ child }
						</CarouselItem>
					</div>
				</Enter>
			))
		}
		<div className='list-more'>
			<SeeMore />
		</div>
	</div>
)
export default CarouselItemList;
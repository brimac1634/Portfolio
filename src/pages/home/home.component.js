import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import { useWindowSize } from '../../utils';

import Carousel from '../../components/carousel/carousel.component';
import CardOne from '../../components/card-one/card-one.component';
import CarouselItemList from '../../components/carousel-item-list/carousel-item-list.component';

import portfolio from '../../assets/portfolio_1920.gif';
import './home.styles.scss';

const Home = () => {
	const [index, setIndex] = useState(1);
	const [height, setHeight] = useState('100vh');
	const [innerWidth] = useWindowSize();
	
	return (
		<div 
			className='home'
			style={{height: innerWidth > 767 ? height : null}}
		>
			<div className='home-content'>
				<MediaQuery maxWidth={767}>
					<img 
						src={portfolio} 
						alt='fullstack developer' 
						className='home-gif' 
					/>
					<CarouselItemList>
						<CardOne />
						<CardOne />
						<CardOne />
					</CarouselItemList>
				</MediaQuery>
				<MediaQuery minWidth={768}>
					<Carousel 
						setHeight={setHeight} 
						height={height}
						index={index}
						setIndex={setIndex}
					>
						<CardOne />
						<CardOne />
						<CardOne />
					</Carousel>
				</MediaQuery>
			</div>
		</div>
	)
}

export default Home;
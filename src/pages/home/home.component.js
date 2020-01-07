import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import { useWindowSize } from '../../utils';

import Carousel from '../../components/carousel/carousel.component';
import CarouselItem from '../../components/carousel-item/carousel-item.component';

import portfolio from '../../assets/portfolio_1920.gif';
import './home.styles.scss';

const Home = () => {
	const [index, setIndex] = useState(1);
	const [height, setHeight] = useState('100vh');
	const [innerWidth] = useWindowSize();
	return (
		<div className='home' style={{height: innerWidth > 767 ? height : null}}>
			<div className='home-content'>
				<MediaQuery maxWidth={767}>
					<img 
						src={portfolio} 
						alt='fullstack developer' 
						className='home-gif' 
					/>
					<div className='carousel-mobile-list'>
						<CarouselItem isVisible>

						</CarouselItem>
						<CarouselItem isVisible>

						</CarouselItem>
						<CarouselItem isVisible>

						</CarouselItem>
					</div>
				</MediaQuery>
				<MediaQuery minWidth={768}>
					<Carousel 
						setHeight={setHeight} 
						height={height}
						index={index}
						setIndex={setIndex}
					>
						<CarouselItem isVisible={index === 0}>

						</CarouselItem>
						<CarouselItem isVisible={index === 1}>

						</CarouselItem>
						<CarouselItem isVisible={index === 2}>

						</CarouselItem>
					</Carousel>
				</MediaQuery>
			</div>
		</div>
	)
}

export default Home;
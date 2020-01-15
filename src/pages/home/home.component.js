import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import { useWindowSize } from '../../utils';

import Carousel from '../../components/carousel/carousel.component';
import CardOne from '../../components/card-one/card-one.component';
import CarouselItemList from '../../components/carousel-item-list/carousel-item-list.component';

import portfolio from '../../assets/portfolio_1920.gif';
import portfolio_800 from '../../assets/portfolio_800.gif';
import portfolio_400 from '../../assets/portfolio_400.gif';
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
						src={portfolio_400} 
						srcSet={
							`${portfolio_400} 400w, 
							${portfolio_800} 800w, 
							${portfolio} 1920w`
						} 
						alt='fullstack developer' 
						className='home-gif' 
						onLoad={e=>console.log(e.target.currentSrc)} 
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
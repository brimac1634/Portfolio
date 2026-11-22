import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import { useWindowSize } from '../../utils';

import Carousel from '../../components/carousel/carousel.component';
import CardOne from '../../components/card/card-one.component';
import CardTwo from '../../components/card/card-two.component';
import CardThree from '../../components/card/card-three.component';
import CarouselItemList from '../../components/carousel-item-list/carousel-item-list.component';

import AssemblingSystem from '../../components/assembling-system/assembling-system.component';
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
			<h1 className='sr-only'>Brian MacPherson | Software Engineer — Systems Architecture and Infrastructure</h1>
			<div className='home-content'>
				<MediaQuery maxWidth={767}>
					<div className='home-illustration'>
						<AssemblingSystem />
					</div>
					<CarouselItemList>
						<CardOne />
						<CardTwo />
						<CardThree />
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
						<CardTwo />
						<CardThree />
					</Carousel>
				</MediaQuery>
			</div>
		</div>
	)
}

export default Home;
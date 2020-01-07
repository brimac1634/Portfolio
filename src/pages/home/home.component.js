import React, { useState, useEffect, useRef } from 'react';
import MediaQuery from 'react-responsive';

import { useWindowSize } from '../../utils';

import Carousel from '../../components/carousel/carousel.component';
import CarouselItemList from '../../components/carousel-item-list/carousel-item-list.component';

import portfolio from '../../assets/portfolio_1920.gif';
import './home.styles.scss';

const Home = () => {
	const [index, setIndex] = useState(1);
	const [height, setHeight] = useState('100vh');
	const [innerWidth] = useWindowSize();
	const home = useRef(null);

	useEffect(() => {
		// if (home.current) {
		// 	home.current.scrollTo(0, 0);

		// 	console.log(window.scrollY)
		// }
	}, [home]);

	return (
		<div 
			className='home' 
			ref={home}
			onScroll={e=>console.log(e)}
			style={{height: innerWidth > 767 ? height : null}}
		>
			<div className='home-content'>
				<MediaQuery maxWidth={767}>
					<img 
						src={portfolio} 
						alt='fullstack developer' 
						className='home-gif' 
					/>
					<div className='carousel-mobile-list'>
						<CarouselItemList allVisible />
					</div>
				</MediaQuery>
				<MediaQuery minWidth={768}>
					<Carousel 
						setHeight={setHeight} 
						height={height}
						index={index}
						setIndex={setIndex}
					>
						<CarouselItemList index={index} />
					</Carousel>
				</MediaQuery>
			</div>
		</div>
	)
}

export default Home;
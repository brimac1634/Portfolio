import React, { useState } from 'react';

import Carousel from '../../components/carousel/carousel.component';

import portfolio from '../../assets/portfolio_3.gif';
import './home.styles.scss';

const data = [1, 1, 1, 1, 1, 1, 1, 1 ]

const Home = () => {
	const [height, setHeight] = useState('100vh');
	return (
		<div className='home' style={{height}}>
			<div className='home-content'>
				<img src={portfolio} alt='name' />
				<Carousel showIndicator setHeight={setHeight} height={height}>
					{
		              data.map((data, i) => (
		                <div 
		                	className='image'
		                	key={i}  
		                />
		              ))
		            }
				</Carousel>
			</div>
		</div>
	)
}

export default Home;
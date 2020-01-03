import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import Carousel from '../../components/carousel/carousel.component';

import portfolio from '../../assets/portfolio_1920.gif';
import './home.styles.scss';

const Home = () => {
	const [height, setHeight] = useState('100vh');
	return (
		<div className='home' style={{height}}>
			<div className='home-content'>
				<MediaQuery maxWidth={786}>
					<img 
						src={portfolio} 
						alt='fullstack developer' 
						className='home-gif' 
					/>
				</MediaQuery>
				<MediaQuery minWidth={787}>
					<Carousel setHeight={setHeight} height={height} />
				</MediaQuery>
			</div>
		</div>
	)
}

export default Home;
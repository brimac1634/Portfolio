import React, { useState } from 'react';

import Carousel from '../../components/carousel/carousel.component';

import './home.styles.scss';

const Home = () => {
	const [height, setHeight] = useState('100vh');
	return (
		<div className='home' style={{height}}>
			<div className='home-content'>
				<Carousel setHeight={setHeight} height={height} />
			</div>
		</div>
	)
}

export default Home;
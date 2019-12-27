import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import name from '../../assets/name.gif';
import './home.styles.scss';

const Home = () => {
	return (
		<div className='home'>
			<img src={name} alt='name' />
		</div>
	)
}

export default Home;
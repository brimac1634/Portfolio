import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import './home.styles.scss';

const Home = () => {
	return (
		<div className='home'>
			<Parallax className='name' y={['-200px', '200px']}>
		    </Parallax>
		</div>
	)
}

export default Home;
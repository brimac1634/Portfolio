import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import './home.styles.scss';

const Home = () => {
	return (
		<div className='home'>
			<Parallax className='name' y={['-200px', '200px']}>
				<h1>Hello,</h1>
		        <h1>I'm Brian</h1>
		    </Parallax>
		    <Parallax className='other' y={['-20px', '20px']} tagOuter="figure">
				<h1>Hello,</h1>
		    </Parallax>
		</div>
	)
}

export default Home;
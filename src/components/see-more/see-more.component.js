import React from 'react';

import { useWindowSize, useMousePosition } from '../../utils';

import './see-more.styles.scss';

const SeeMore = () => {
	const [mouseX, mouseY] = useMousePosition();
	const [innerWidth, innerHeight] = useWindowSize();
	console.log(mouseX, mouseY)
	return (
		<div className='see-more'>
			<div className='iris'>
				<div className='pupil' />
			</div>
		</div>
	)
}
export default SeeMore;
import React, { useState, useEffect, useRef } from 'react';

import { useWindowSize, useMousePosition } from '../../utils';

import './see-more.styles.scss';

const SeeMore = () => {
	const [translate, setTranslate] = useState([0, 0]);
	const [irisWidth, setIrisWidth] = useState(0);
	const iris = useRef(null);
	const mousePosition = useMousePosition();
	const windowSize = useWindowSize();

	const [translateX, translateY] = translate;

	useEffect(()=>{
		if (!iris) return;
		setIrisWidth(iris.current.clientWidth);
	}, [iris, setIrisWidth, windowSize])

	useEffect(()=>{
		if (!iris) return;
		let [mouseX, mouseY] = mousePosition;
		console.log(mouseX, mouseY)
		const [innerWidth, innerHeight] = windowSize;
		const halfPupil = irisWidth * 0.2;
		const translateX = ((mouseX * irisWidth) / innerWidth) - halfPupil;
		const translateY = ((mouseY * irisWidth) / innerHeight) - halfPupil;
		setTranslate([translateX, translateY]);
	}, [mousePosition, windowSize, irisWidth, setTranslate])

	return (
		<div className='see-more'>
			<div className='iris' ref={iris} >
				<div 
					className='pupil' 
					style={{
						transform: `translate(${translateX}px, ${translateY}px)`,
						WebkitTransform: `translate(${translateX}px, ${translateY}px)`,
		            }}
				/>
			</div>
		</div>
	)
}
export default SeeMore;
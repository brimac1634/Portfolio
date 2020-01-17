import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useWindowSize, useMousePosition } from '../../utils';

import './see-more.styles.scss';

const SeeMore = () => {
	const [pupilTranslate, setPupilTranslate] = useState([0, 0]);
	const [irisTranslate, setIrisTranslate] = useState([0, 0]);
	const [irisWidth, setIrisWidth] = useState(0);
	const [eyeIsClosed, setEyeIsClosed] = useState(false);
	const iris = useRef(null);
	const mousePosition = useMousePosition();
	const windowSize = useWindowSize();

	const [pupilTranslateX, pupilTranslateY] = pupilTranslate;
	const [irisTranslateX, irisTranslateY] = irisTranslate;

	useEffect(()=>{
		const interval = setInterval(()=>{
			setEyeIsClosed(true)
			setTimeout(()=>{
				setEyeIsClosed(false)
			}, 600)
		}, 7000)
		return ()=>clearInterval(interval);
	}, [])

	useEffect(()=>{
		if (!iris) return;
		setIrisWidth(iris.current.clientWidth);
	}, [iris, setIrisWidth, windowSize])

	useEffect(()=>{
		if (!iris) return;
		const [innerWidth, innerHeight] = windowSize;
		const [mouseX, mouseY] = mousePosition;
		const pupilX = (mouseX - innerWidth * 0.5) * 0.4;
		const pupilY = (mouseY - innerHeight * 0.5) * 0.4;
		const irisX = (mouseX - innerWidth * 0.5) * 0.3;
		const irisY = (mouseY - innerHeight * 0.5) * 0.3;
		const pupilTranslateX = ((pupilX * irisWidth) / innerWidth);
		const pupilTranslateY = ((pupilY * irisWidth) / innerHeight);
		const irisTranslateX = ((irisX * irisWidth) / innerWidth);
		const irisTranslateY = ((irisY * irisWidth) / innerHeight);
		setPupilTranslate([pupilTranslateX, pupilTranslateY]);
		setIrisTranslate([irisTranslateX, irisTranslateY])
	}, [mousePosition, windowSize, irisWidth, setPupilTranslate, setIrisTranslate])

	return (
		<div className='see-more'>
			<div 
				className='outer-eye'
				onClick={()=>{
					setEyeIsClosed(true)
					setTimeout(()=>{
						setEyeIsClosed(false)
					}, 600)
				}}
			>
				<div 
					className='iris' 
					ref={iris}
					style={{
						transform: `rotate(-45deg) translate(${irisTranslateX}px, ${irisTranslateY}px)`,
						WebkitTransform: `rotate(-45deg) translate(${irisTranslateX}px, ${irisTranslateY}px)`,
		            }} 
				>
					<div 
						className='pupil' 
						style={{
							transform: `translate(${pupilTranslateX}px, ${pupilTranslateY}px)`,
							WebkitTransform: `translate(${pupilTranslateX}px, ${pupilTranslateY}px)`,
			            }}
					>
						<div />
					</div>
				</div>
				<div className={`eye-lid ${eyeIsClosed ? 'shut' : null}`} />
			</div>
			<h2 className='more-line'>see more</h2>
			<div className='options'>
				<Link to='/work'>work</Link>
				<Link to='/about'>about</Link>
			</div>
		</div>
	)
}
export default SeeMore;
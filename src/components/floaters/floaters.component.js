import React, { useEffect, useRef } from 'react';

import Floater from './Floater';

const FLoaters = ({ rect, ...otherProps }) => {
	const canvasRef = useRef(null);
	const { width, height } = rect;

	useEffect(()=>{
		if (!canvasRef.current) return;
		const { width, height } = rect;
		const canvas = canvasRef.current        
		const c = canvas.getContext('2d')
		let floaterArray = [];

		const radiusAdjustment = (window.innerWidth + window.innerHeight) / 2
		const radiusConstant = window.innerWidth < 500 ? 0.006 : 0.004;

		for (var i = 0; i < Math.ceil(((width + height) / 2) * 0.15); i++) {
	        const radius = Math.random() * radiusAdjustment * radiusConstant;
	        const x = (Math.random() * (width - radius * 2)) + radius;
	        const y = (Math.random() * (height - radius * 2)) + radius;
	        const dx = (Math.random() - 0.5) * 0.5;
	        const dy = (Math.random() - 0.5) * 0.5;
	        const alpha = (Math.random() * 0.8) + 0.05;
	        floaterArray.push(new Floater(x,y,dx,dy,alpha,radius,c))
		}

	      const animate = () => {
	        requestAnimationFrame(animate)
	        c.clearRect(0, 0, window.innerWidth, window.innerHeight);

	        for (var i = 0; i < floaterArray.length; i++) {
	          floaterArray[i].update();
	        }
	      }
	      animate();
	}, [canvasRef, rect])

	return (
		<canvas 
	        ref={canvasRef}
	        style={{ background: 'rgb(63, 59, 89)'}}
	        width={width * 1.1} 
	        height={height * 1.1}
	        { ...otherProps }
		/>
	)
}
export default FLoaters;
import React, { useEffect, useMemo, useState } from 'react'
import { useSpring, animated } from 'react-spring'

import './parallax-spring.styles.scss';

const ParallaxSpring = ({ x, y }) => {
	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 200, friction: 700 } }))

	useEffect(()=>{
		set({ xy: calc(x, y) });
	}, [set, x, y])
	
	const halfWidth = window.innerWidth;
	const halfHeight = window.innerHeight;
	const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

	const randomFloating = quantity => {
		const numberOfPixels = window.innerWidth * window.innerHeight / 2;
		const quantityOfFloaters = numberOfPixels * quantity;
		const floaterArray = [];
		for (var i = 0; i < quantityOfFloaters; i++) {
			const xPosition = Math.random() * 1
			const yPosition = Math.random() * 1
			floaterArray.push({ xPosition, yPosition })
		}
		return floaterArray
	}
	const floaters = useMemo(() => randomFloating(0.0001), [])
	return (
		<div className='parallax-spring'>
			<div className='moon'/>
			{
				floaters &&
				floaters.map(({ xPosition, yPosition }, i) => (
					<animated.div 
						key={i}
						className='particle' 
						style={{ transform: props.xy.interpolate((x, y) => `translate3d(${x / 8 + halfWidth * xPosition}px,${y / 12 + halfHeight * yPosition}px,0)`) }}
					/>
				))
			}
	    </div>
	)
}
export default ParallaxSpring;
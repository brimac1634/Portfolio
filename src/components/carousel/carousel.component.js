import React, { useMemo, useEffect, useState, useRef, Children } from 'react';

import { useWindowSize, useScrollY } from '../../utils';

import CarouselItem from '../../components/carousel-item/carousel-item.component';

import portfolio from '../../assets/portfolio_1920.gif';
import './carousel.styles.scss';

const Carousel = ({ children, height, setHeight, index, setIndex }) => {
	const [translateValue, setTranslation] = useState(0);
	const [opacity, setOpacity] = useState(1);
	const [innerWidth] = useWindowSize();
	const scrollY = useScrollY();
	const wrapper = useRef(null);

	const panelWidth = useMemo(()=>innerWidth * 0.2, [innerWidth])

	const lastItemOffset = useMemo(()=>{
		return -(panelWidth + (children.length * (panelWidth * 2.25)) - (panelWidth * 0.25))
	}, [children, panelWidth])
	
	useEffect(()=>{
		// fix the height here
		console.log(children.length)
		if (innerWidth) setHeight((panelWidth * 0.5) + ((panelWidth * 2.5) * children.length));
			// setHeight(wrapper.current.scrollWidth);
	}, [setHeight, panelWidth, children])

	useEffect(()=>{
		if (-translateValue > innerWidth * 0.2) {
			setIndex(Math.floor((-translateValue - innerWidth * 0.2)/ (innerWidth * 0.5)))
		} else {
			setIndex(null)
		}
	}, [translateValue, innerWidth, setIndex])

	useEffect(()=>{
		const scrollValue = -scrollY;
		if (!scrollValue || scrollValue < lastItemOffset || scrollValue > 0) return;
		setTranslation(scrollValue);
		setOpacity(1 + ((scrollValue * 100 / (innerWidth * 0.6)) * 0.01))
	}, [scrollY, innerWidth, lastItemOffset])

	return (
		<div 
			className='carousel'
			style={{height}}
		> 
			<img 
				style={{opacity}}
				src={portfolio} 
				alt='fullstack developer' 
				className='port' 
			/>
			<div className='message' style={{opacity}}>
	        	<div className='oval'>
	        		<div className='line'>
	        			<div />
	        		</div>
	        	</div>
	        	<span className='scroll'>scroll to discover</span>
	        </div>
			<div 
				className="slider-wrapper"
				ref={wrapper}
	          	style={{
					transform: `translate(${translateValue}px, -50%)`,
					WebkitTransform: `translate(${translateValue}px, -50%)`
	            }}
	         >
	            {
	            	Children.map(children, (child, i) => (
	            		<CarouselItem key={i} isVisible={index === i}>
							{ child }
						</CarouselItem>
	            	))
	            }
	        </div>
			<div className={`indicators ${-translateValue > panelWidth ? 'show' : null}`}>
				<span>{index + 1} / {children.length}</span>
			</div>
		</div>
	)
}

export default Carousel;
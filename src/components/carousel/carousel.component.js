import React, { useMemo, useEffect, useState, useRef, Children } from 'react';

import { useWindowSize } from '../../utils';

import CarouselItem from '../../components/carousel-item/carousel-item.component';

import portfolio from '../../assets/portfolio_1920.gif';
import './carousel.styles.scss';

const Carousel = ({ children, height, setHeight, index, setIndex }) => {
	const [translateValue, setTranslation] = useState(0);
	const [opacity, setOpacity] = useState(1);
	const [innerWidth] = useWindowSize();
	const wrapper = useRef(null);

	const panelWidth = useMemo(()=>innerWidth * 0.4 / 2, [innerWidth])

	const lastItemOffset = useMemo(()=>{
		if (!wrapper.current) return;
		return -height + (wrapper.current.clientWidth * 0.7)
	}, [height])

	useEffect(()=>{
		if (wrapper.current && innerWidth) setHeight(wrapper.current.scrollWidth);
	}, [wrapper, setHeight, innerWidth])

	useEffect(()=>{
		if (-translateValue > innerWidth * 0.2) {
			setIndex(Math.floor((-translateValue - innerWidth * 0.2)/ (innerWidth * 0.5)))
		} else {
			setIndex(1)
		}
	}, [translateValue, innerWidth, setIndex])

	const handleScroll = e => {
		const newValue = translateValue + -e.deltaY;
		if (newValue < lastItemOffset || newValue > 0) return;
		setTranslation(newValue);
		setOpacity(1 + ((translateValue * 100 / (innerWidth * 0.6)) * 0.01))
	}

	return (
		<div 
			className='carousel' 
			onWheel={handleScroll}
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
	            		<CarouselItem key={i} isVisible={index === 0}>
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
import React, { useMemo, useEffect, useState, useRef, Children } from 'react';

import { useWindowSize, useScrollY } from '../../utils';

import CarouselItem from '../../components/carousel-item/carousel-item.component';

import portfolio from '../../assets/portfolio_1920.gif';
import portfolio_800 from '../../assets/portfolio_800.gif';
import portfolio_400 from '../../assets/portfolio_400.gif';
import './carousel.styles.scss';

const Carousel = ({ children, height, setHeight, index, setIndex }) => {
	const [translateValue, setTranslation] = useState(0);
	const [opacity, setOpacity] = useState(1);
	const [innerWidth, innerHeight] = useWindowSize();
	const scrollY = useScrollY();
	const wrapper = useRef(null);

	const panelWidth = useMemo(()=>innerWidth * 0.2, [innerWidth])
	
	useEffect(()=>{
		setHeight(wrapper.current.scrollWidth + innerHeight);
	}, [setHeight, wrapper, innerWidth, innerHeight])

	useEffect(()=>{
		if (-translateValue > innerWidth * 0.2) {
			let index = Math.floor((-translateValue - innerWidth * 0.2)/ (innerWidth * 0.5));
			index = index <= children.length - 1 ? index : children.length - 1;
			setIndex(index);
		} else {
			setIndex(null)
		}
	}, [translateValue, innerWidth, setIndex])

	useEffect(()=>{
		const scrollValue = -scrollY;
		if (!scrollValue) return;
		setTranslation(scrollValue);
		setOpacity(1 + ((scrollValue * 100 / (innerWidth * 0.6)) * 0.01))
	}, [scrollY, innerWidth])
	
	return (
		<div 
			className='carousel'
			style={{height}}
		> 
			<img 
				style={{opacity}}
				src={portfolio_800}
				srcSet={
					`${portfolio_400} 400w,
					${portfolio_800} 800w, 
					${portfolio} 1920w`
				} 
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
				className='slider-wrapper'
				ref={wrapper}
	          	style={{
					transform: `translate(${translateValue}px, -50%)`,
					WebkitTransform: `translate(${translateValue}px, -50%)`,
	            }}
	         >
	            {
	            	Children.map(children, (child, i) => (
	            		<div className='container'>
		            		<CarouselItem key={i} isVisible={index === i}>
								{ child }
							</CarouselItem>
						</div>
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
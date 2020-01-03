import React, { useMemo, useEffect, useState, useRef } from 'react';

import workData from '../../pages/work/work.data';

import { useWindowSize } from '../../utils';

import portfolio from '../../assets/portfolio_1920.gif';
import './carousel.styles.scss';

const Carousel = ({ children, height, setHeight }) => {
	const [index, setIndex] = useState(1);
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
		if (wrapper.current) setHeight(wrapper.current.scrollWidth);
	}, [wrapper, setHeight])

	useEffect(()=>{
		if (-translateValue > innerWidth * 0.2) {
			setIndex(Math.floor((-translateValue - innerWidth * 0.2)/ (innerWidth * 0.6)))
		} else {
			setIndex(1)
		}
	}, [translateValue, innerWidth, height])

	const handleScroll = e => {
		const newValue = translateValue + -e.deltaY;
		if (newValue < lastItemOffset || newValue > 0) return;
		setTranslation(newValue);
		setOpacity(1 + ((translateValue * 100 / (innerWidth * 0.4)) * 0.01))
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
	        	<span>scroll to discover</span>
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
					workData.map(({ route, image, title, description}, i) => {
						const isVisisble = index === i;
						return (
							<div 
								className={`item ${isVisisble ? 'visible' : null}`}
								key={i}  
							>
								<div className='image' style={{backgroundImage: `url(${image})`}} />
								<div className={`title ${isVisisble ? 'visible' : null}`}>
									<h3>{title}</h3>
									<h3>{description}</h3>
								</div>
							</div>
						)
					})
	            }
	        </div>
			<div className={`indicators ${-translateValue > panelWidth ? 'show' : null}`}>
				<span>{index + 1} / {workData.length}</span>
			</div>
		</div>
	)
}

export default Carousel;
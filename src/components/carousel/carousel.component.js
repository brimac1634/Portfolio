import React, { useMemo, useEffect, useState, useRef} from 'react';

import './carousel.styles.scss';

const Carousel = ({ children, showIndicator, height, setHeight }) => {
	const [index, setIndex] = useState(0);
	const [translateValue, setTranslation] = useState(0);
	const wrapper = useRef(null);

	const lastItemOffset = useMemo(()=>{
		console.log('im here')
		if (!wrapper.current) return;
		return -height + (wrapper.current.clientWidth * 0.7)
	}, [height])

	useEffect(()=>{
		if (wrapper.current) setHeight(wrapper.current.scrollWidth);
	}, [wrapper, setHeight])

	const handleScroll = e => {
		const newValue = translateValue + -e.deltaY;
		if (newValue < lastItemOffset || newValue > 0) return;
		setTranslation(newValue);
	}

	return (
		<div 
			className='carousel' 
			onWheel={handleScroll}
			style={{height}}
		> 
			<div 
				className="slider-wrapper"
				ref={wrapper}
	          	style={{
					transform: `translate(${translateValue}px, -50%)`,
					WebkitTransform: `translate(${translateValue}px, -50%)`
	            }}
	         >
	            {children}
	        </div>
			{
				showIndicator &&
				<div className='indicators'>
					<span>{index}/{children.length}</span>
				</div>
			}
		</div>
	)
}

export default Carousel;
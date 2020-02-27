import React, { useEffect, useState } from 'react';

import FloatersContainer from '../../components/floaters-container/floaters-container.component';

import './carousel-item.styles.scss';

const CarouselItem = ({ isVisible, children }) => {
	const [isShowing, setIsShowing] = useState(false);

	useEffect(()=>{
		setIsShowing(isVisible);
	}, [isVisible])

	return (
		<div 
			className={`carousel-item ${isShowing ? 'show' : 'hide'}`}
			onMouseEnter={()=>setIsShowing(true)}
			onMouseLeave={()=>{
				if (isVisible) return;
				setIsShowing(false)
			}}
		>
			<FloatersContainer show otherClasses='background-canvas' />
			<div className={`inner-item ${isShowing ? 'show' : 'hide'}`}>
				{
					isShowing &&
					children
				}
			</div>
		</div>
	)
}

export default CarouselItem;
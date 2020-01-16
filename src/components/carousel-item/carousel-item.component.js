import React, { useEffect, useState } from 'react';

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
			<div className='background-vid' />
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
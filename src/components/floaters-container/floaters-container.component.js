import React, { useState, useRef, useEffect } from 'react';
import { useWindowSize } from '../../utils';

import Floaters from '../floaters/floaters.component';

import './floaters-container.styles.scss';

const FloatersContainer = ({ otherClasses, show, ...otherProps }) => {
	const [rect, setRect] = useState({
		width: 0,
		height: 0
	});
	const holder = useRef(null);
	const windowSize = useWindowSize();

	useEffect(()=>{
		if (!holder.current) return;
		const { width, height } = holder.current.getBoundingClientRect();
		if (width !== rect.width || height !== rect.height) {
			setRect({ width, height });
		}
	}, [rect, holder, windowSize])

	return (
		<div className={`floaters-container ${otherClasses} ${show ? 'show' : null}`} ref={holder} { ...otherProps }>
			{ rect && show &&
				<Floaters  
					className='floaters'
					rect={rect}
				/>
			}
		</div>
	)
}
export default FloatersContainer;
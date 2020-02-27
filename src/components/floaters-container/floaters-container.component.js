import React, { useState, useRef, useEffect } from 'react';
import { useWindowSize } from '../../utils';

import Floaters from '../floaters/floaters.component';

import './floaters-container.styles.scss';

const FloatersContainer = ({ otherClasses, show, ...otherProps }) => {
	const [rect, setRect] = useState(null);
	const holder = useRef(null);
	const windowSize = useWindowSize();

	useEffect(()=>{
		if (!holder.current) return;
		const rect = holder.current.getBoundingClientRect();
		setRect(rect)
	}, [holder, windowSize])

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
import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import './work-item.styles.scss';

const WorkItem = ({ image, title, description, ...otherProps }) => {
	const [loadComplete, setLoadComplete] = useState(false);
	return (
		<div className={`work-item ${loadComplete ? null : 'loading'}`} { ...otherProps }>
			<img 
				className={`image ${loadComplete ? 'show' : null}`}
				src={image} 
				alt={title} 
				onLoad={()=>setLoadComplete(true)} 
			/>
			<MediaQuery maxWidth={575}>
				<div className='gradient' />
			</MediaQuery>
			{
				loadComplete &&
				<div className='details'>
					<h3>{title}</h3>
					<span>{description}</span>
				</div>
			}
		</div>
	)
}

export default WorkItem;
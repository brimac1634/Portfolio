import React from 'react';

import './work-item.styles.scss';

const WorkItem = ({ image, title, description, setImageLoad, ...otherProps }) => (
	<div className='work-item' { ...otherProps }>
		<img 
			className='image' 
			src={image} 
			alt={title} 
			onLoad={()=>setImageLoad()} 
		/>
		<div className='details'>
			<h3>{title}</h3>
			<span>{description}</span>
		</div>
	</div>
)

export default WorkItem;
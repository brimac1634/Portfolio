import React from 'react';
import MediaQuery from 'react-responsive';

import './work-item.styles.scss';

const WorkItem = ({ image, title, description, setImageLoad, show, ...otherProps }) => (
	<div className='work-item' { ...otherProps }>
		<img 
			className={`image ${show ? 'show' : null}`}
			src={image} 
			alt={title} 
			onLoad={()=>setImageLoad()} 
		/>
		<MediaQuery maxWidth={575}>
			<div className='gradient' />
		</MediaQuery>
		{
			show &&
			<div className='details'>
				<h3>{title}</h3>
				<span>{description}</span>
			</div>
		}
	</div>
)

export default WorkItem;
import React from 'react';

import './work-item.styles.scss';

const WorkItem = ({ image, title, description }) => (
	<div className='work-item'>
		<div className='image' style={{backgroundImage: `url(${image})`}} />
		<div className='details'>
			<h3>{title}</h3>
			<span>{description}</span>
		</div>
	</div>
)

export default WorkItem;
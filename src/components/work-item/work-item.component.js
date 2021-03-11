import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

import FloatersContainer from '../../components/floaters-container/floaters-container.component';

import './work-item.styles.scss';

const WorkItem = ({ image, title, description, ...otherProps }) => {
	const [loadComplete, setLoadComplete] = useState(false);
	return (
		<div className='work-item' { ...otherProps }>
			<FloatersContainer show={!loadComplete} otherClasses='floater-load' />
			<img 
				className={`image ${loadComplete ? 'show' : null}`}
				src={require(`../../assets/${image}`)} 
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
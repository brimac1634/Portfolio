import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import FloatersContainer from '../../components/floaters-container/floaters-container.component';

import './work-item.styles.scss';

const WorkItem = ({ image, title, description, history, ...otherProps }) => {
	const [loadComplete, setLoadComplete] = useState(false);
	return (
		<Link className={`work-item ${loadComplete ? 'loaded' : 'loading'}`}  { ...otherProps }>
			{history && <span className='project-year'>{history.year}{history.ongoing ? ' · Ongoing' : ''}</span>}
			<FloatersContainer show={!loadComplete} otherClasses='floater-load' />
			<img 
				className={`image ${loadComplete ? 'show' : null}`}
				src={require(`../../assets/${image}`).default} 
				alt={title} 
				onLoad={()=>setLoadComplete(true)} 
			/>
			<MediaQuery maxWidth={575}>
				<div className='gradient' />
			</MediaQuery>
			{
				<div className='details'>
					<h3>{title}</h3>
					<span>{description}</span>
				</div>
			}
		</Link>
	)
}

export default WorkItem;
import React, { useState, useEffect, useRef } from 'react';

import workDetailData from './work-detail.data';

import Loader from '../../components/loader/loader.component';

import './work-detail.styles.scss';

const WorkDetail = ({ match }) => {
	const [isLoading, setIsLoading] = useState(false);
	const video = useRef(null);
	const work = workDetailData[match.params.work];

	useEffect(()=>{
		if (work.video) setIsLoading(true);
	}, [work, setIsLoading])
	
	return (
		<div className='work-detail'>
			<h1>{work.title}</h1>
			{
				work.video &&
				<div className='video'>
					<iframe 
						ref={video}
						title={work.title}
						src={work.video} 
						width='100%' 
						height='100%'
						frameBorder='0' 
						allow='autoplay; fullscreen' 
						onLoad={()=>setIsLoading(false)}
						allowFullScreen 
					/>
					{
						isLoading &&
						<Loader />	
					}
				</div>
			}
			<div className='info'>
				<p>{work.description}</p>
				<div className='details'>
					{
						work.link &&
						<div className='detail-item'>
							<span>Link</span>
							<a 
								href={`https://www.${work.link}`} 
								target='_blank' 
								rel='noopener noreferrer'
							>{work.link}</a>
						</div>
					}
					{
						work.info.map((info, i) => (
							<div className='detail-item' key={i}>
								<span>{info[0]}</span>
								<span>{info[1]}</span>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default WorkDetail;
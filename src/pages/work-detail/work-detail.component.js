import React from 'react';

import workDetailData from './work-detail.data';

import './work-detail.styles.scss';

const WorkDetail = ({ match }) => {
	const work = workDetailData[match.params.work];
	return (
		<div className='work-detail'>
			<h1>{work.title}</h1>
			{
				work.video &&
				<div className='video'>
					<iframe 
						src={work.video} 
						width='100%' 
						height='100%'
						frameBorder='0' 
						allow='autoplay; fullscreen' 
						allowFullScreen 
					/>
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
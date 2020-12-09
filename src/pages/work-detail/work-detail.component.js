import React from 'react';
import { Link } from 'react-router-dom';

import workDetailData from './work-detail.data';

import Video from '../../components/video/video.component';

import './work-detail.styles.scss';

const WorkDetail = ({ match, location }) => {
	const work = workDetailData[match.params.work];

	return (
		<div className='work-detail'>
			<h1>{work.title}</h1>
			{
				work.video &&
				<div className='video-container'>
					<Video url={work.video} />
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
					{
						work.privacy &&
						<div className='detail-item'>
							<span>Privacy Policy</span>
							<Link 
								to={`${location.pathname}/privacy-policy`} 
							>
								here
							</Link>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default WorkDetail;
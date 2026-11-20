import React from 'react';
import { Link } from 'react-router-dom';

import workDetailData from './work-detail.data';
import projectHistory from '../work/project-history';

import NotFound from '../not-found/not-found.component';
import { isPrerendering } from '../../prerender';
import Video from '../../components/video/video.component';

import './work-detail.styles.scss';

const WorkDetail = ({ match, location }) => {
	const work = workDetailData[match.params.work];
	if (!work) return <NotFound />;
  const history = projectHistory[match.params.work];

	return (
		<div className='work-detail'>
			<h1>{work.title}</h1>
      {history && <p className='project-date'>{history.ongoing ? 'First launched' : 'First completed'} · {history.year}{history.ongoing ? ' · Ongoing' : ''}</p>}
      {history && !history.ongoing && <p className='project-context'>This case study reflects the original project. The live product may have changed since.</p>}
			{
				work.video && !isPrerendering &&
				<div className='video-container'>
					<Video url={work.video} />
				</div>
			}
      {work.screenshot && (
        <img className='project-screenshot' {...work.screenshot} alt={work.screenshot.alt} />
      )}
			<div className='info'>
				{work.richDescription ? <div className='description'>{work.richDescription}</div> : <p>{work.description}</p>}
				<div className='details'>
					{
						work.link &&
						<div className='detail-item'>
							<span>Link</span>
							<a 
								href={work.link}
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
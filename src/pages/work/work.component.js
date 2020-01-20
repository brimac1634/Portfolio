import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import workData from './work.data';

import WorkItem from '../../components/work-item/work-item.component';
import WorkDetail from '../work-detail/work-detail.component';

import Card from '../../assets/Card_1000.gif';
import './work.styles.scss';

const Work = ({ match, history }) => {
	const [imageCount, setImageCount] = useState([]);
	const [loadComplete, setLoadComplete] = useState(false);
	useEffect(()=>{
		if (imageCount.length === workData.length) setLoadComplete(true);
	}, [imageCount])

	return (
		<div className='work'>
			<Switch>
				<Route exact path={match.path} render={()=>(
					<div className='work-collection'>
						{
							workData &&
							workData.map(({ route, gridArea, image, title, description}, i) => (
								<WorkItem 
									key={title}
									onClick={()=>history.push(`${match.path}${route}`)}
									style={{
										gridArea,
										animationDelay: `${(i + 1) * 0.2}s`,
										backgroundImage: loadComplete ? null : `url(${Card})`
									}}
									show={loadComplete}
									image={image} 
									title={title} 
									description={description}
									setImageLoad={()=>setImageCount([...imageCount, i])} 
								/>
							))
						}
						<div className='holder holder1'/>
					</div>
				)}/>
				<Route path={`${match.path}/:work`} component={WorkDetail}/>
				<Redirect to={match.path} />
			</Switch>
		</div>
	)
}

export default Work;
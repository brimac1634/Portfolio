import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import workData from './work.data';

import ErrorBoundary from '../../components/error-boundary/error-boundary.component';
import Loader from '../../components/loader/loader.component';
import WorkItem from '../../components/work-item/work-item.component';
import WorkDetail from '../work-detail/work-detail.component';

import './work.styles.scss';

const Work = ({ match, history }) => (
	<div className='work'>
		<ErrorBoundary>
	        <Suspense fallback={<Loader />}>
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
											gridArea: gridArea,
											animationDelay: `${(i + 1) * 0.2}s`
										}}
										image={image} 
										title={title} 
										description={description} 
									/>
								))
							}
							<div className='holder holder1'/>
						</div>
					)}/>
					<Route path={`${match.path}/:work`} component={WorkDetail}/>
					<Redirect to={match.path} />
				</Switch>
	        </Suspense>
		</ErrorBoundary>
	</div>
)

export default Work;
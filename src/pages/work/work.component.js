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
								workData.map(({ route, gridArea, image, title, description}) => {
									return (
									<div 
										key={title}
										onClick={()=>history.push(`${match.path}${route}`)}
										className='box' 
										style={{gridArea: gridArea}}
									>
										<WorkItem 
											image={image} 
											title={title} 
											description={description} 
										/>
									</div>
								)
								})
							}
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
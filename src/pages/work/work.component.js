import React from 'react';

import workData from './work.data';
import projectHistory from './project-history';

import FloatersContainer from '../../components/floaters-container/floaters-container.component';
import WorkItem from '../../components/work-item/work-item.component';

import './work.styles.scss';

const Work = () => (
	<div className='work'>

				<div>
					<div className='work-header'>
						<h1>Selected projects</h1>
					</div>
					<div className='work-collection'>
						{
							workData &&
							workData.map(({ route, gridArea, image, title, description}, i) => (
								<WorkItem 
									key={title}
									to={`/projects${route}`}
									style={{
										gridArea,
										animationDelay: `${(i + 1) * 0.2}s`
									}}
									image={image} 
									title={title} 
									description={description}
                  history={projectHistory[route.slice(1)]}
								/>
							))
						}
						<FloatersContainer otherClasses='holder1' show />
						<FloatersContainer otherClasses='holder2' show />
					</div>
				</div>
	</div>
)

export default Work;

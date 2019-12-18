import React from 'react';

// import workData from './work.data';

import './work-detail.styles.scss';

const WorkDetail = ({ match }) => (
	<div className='work-detail'>
		{match.params.work}
	</div>
)

export default WorkDetail;
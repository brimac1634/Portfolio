import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import cover from '../../assets/cover.jpg';

import WorkItem from '../../components/work-item/work-item.component';

import './work.styles.scss';

const Work = () => {
	return (
		<div className='work'>
			<Parallax 
				className='image' x={['-200px', '200px']}
				style={{top: '200px', left: 0}}
			>
				<WorkItem image={cover} title='test' description='hey there' />
		    </Parallax>
		    <Parallax 
		    	className='image' x={['-200px', '200px']}
		    	style={{top: '400px', left: '50%'}}
		    >
				<WorkItem image={cover} title='test' description='hey there' />
		    </Parallax>
		</div>
	)
}

export default Work;
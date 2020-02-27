import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

import { getVideoURL } from '../../firebase/firebase.utils';

import FloatersContainer from '../floaters-container/floaters-container.component';

import './video.styles.scss';

const Video = ({ url }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [video, setVideo] = useState('');

	useEffect(()=>{
		if (!url) return;
		setIsLoading(true);
		getVideoURL(url).then(video=>{
			setVideo(video)
		}).catch(console.log)
	}, [url, setIsLoading])
	
	return (
		<div className='video'>
			<ReactPlayer 
				url={video}
				controls
				playsinline 
				width='100%'
				height='100%'
				onReady={()=>setIsLoading(false)}
			/>
			<FloatersContainer show={isLoading} />
		</div>
	)
}
export default Video;
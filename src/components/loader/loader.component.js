import React from 'react';


import './loader.styles.scss';

const Loader = ({ fixed }) => (
	<div className={`loader ${fixed ? 'fixed' : 'absolute'}`}>
		
	</div>
)

export default Loader;
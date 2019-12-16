import React, { Component } from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasErrored: false
		}
	}

	static getDerivedStateFromError(error) {
		return { hasErrored: true }
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<div className='error-boundary'>
					<h2>Oops!</h2>
					<span>Please try refreshing.</span>
				</div>
			)
		} 
		return this.props.children
	}
} 

export default ErrorBoundary;
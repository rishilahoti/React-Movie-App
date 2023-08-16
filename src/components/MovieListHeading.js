import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col'>
			<h1>{props.heading}</h1>
			<h5>{props.subheading}</h5>
		</div>
	);
};

export default MovieListHeading;
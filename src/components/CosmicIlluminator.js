import React from 'react';

const getTime = time => {
	switch (time) {
		case 'night':
			return '#E0E0E0';
		default:
			return '#FFB300';
	}
}

const CosmicIlluminator = props => (
	<div className="illuminator">
		<svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
			<circle cx="50" cy="50" r="50" className="illuminator__sphere" fill={getTime(props.time)}/>
		</svg>
	</div>
);

export default CosmicIlluminator;
import React from 'react';

function Countdown(props) {
	return (
		<div className="absolute top-0 bottom-0 left-0 right-0 m-auto text-white">
			<h1 style={{ fontSize: "20vw"}}>{props.countdown}</h1>
		</div>
	);
}

export default Countdown;
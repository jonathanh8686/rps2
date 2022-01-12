import React from 'react';

function WaitingScreen(props) {
	return (
		<div>
			<div className="mt-20">
				<span className="text-3xl lg:text-4xl text-white">you </span>
				<span className="text-3xl lg:text-4xl text-apple"> ({props.name}) </span>
				<span className="text-3xl lg:text-4xl text-white"> are in room </span>
			</div>
			<span className="text-6xl lg:text-9xl mt-10 text-myblue">{props.room}</span>
			<br/>
			<br/>
			<br/>
			<span className="text-2xl lg:text-3xl text-lemon">waiting for second player...</span>
			<br></br>

			<span className={props.waitingStatus.includes("successfully") ? "text-green-400" : "text-red-400"}>{props.waitingStatus}</span>
		</div>
	);
}
export default WaitingScreen;
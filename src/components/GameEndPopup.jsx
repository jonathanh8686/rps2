import React from 'react';
import Popup from 'reactjs-popup';

function GameEndPopup(props) {
	let winner = "";
	let winnerColor = "";
	if(props.score > 0) {
		winner = props.p1
		winnerColor = "text-myblue"
	} 
	else if(props.score === 0) {
		winner = "tie!";
		winnerColor = "text-white"
	} 
	else if(props.score < 0){
		winner = props.p2
		winnerColor = "text-apple"
	}

	return (
		<div>
			<Popup open={true} position="right center" modal>
				<div className="bg-black/80 h-screen w-screen place-content-center items-center justify-center flex">
					<div>
						<div className="text-6xl lg:text-8xl text-white mb-10">game over!</div>
						<span className="text-3xl lg:text-5xl text-white">the winner was: </span>
						<span className={"text-3xl lg:text-5xl " + winnerColor}>{winner}</span>
						<br></br>
						<span className="text-3xl lg:text-5xl text-white">with a final score of: </span>
						<span className={"text-3xl lg:text-5xl " + winnerColor}>{Math.abs(props.score)}</span>
						<br></br>
						<div onClick={() => {props.setGameState("title")}} className={"m-20 text-xl border border-white rounded-lg py-2 px-10 bg-black/80 cursor-pointer text-center " + winnerColor}>return to title</div>
					</div>
				</div>
			</Popup>
		</div>
	);
}

export default GameEndPopup;
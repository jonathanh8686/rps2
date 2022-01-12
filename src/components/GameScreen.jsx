import React from 'react';
import GameEndPopup from './GameEndPopup';
import Countdown from "./Countdown";


function GameScreen(props) {
	const player1ImgSource = props.gameState["p1_state"] + ".png";
	const player2ImgSource = props.gameState["p2_state"] + ".png";

	let scoreColor = "";
	if (props.gameState["score"] > 0) scoreColor = "text-myblue"
	if (props.gameState["score"] === 0) scoreColor = "text-white"
	if (props.gameState["score"] < 0) scoreColor = "text-apple"

	return (
		<div>
			{props.countdown !== 0 && 
				<Countdown countdown={props.countdown}></Countdown>
			}
			{props.countdown === 0 &&
				<div className="grid grid-cols-3 grid-rows-3 h-screen place-items-center">

					<span className="col-start-1 col-span-3 text-9xl text-white">{props.gameState["timer"] === 0 ? "Final Score" : props.gameState["timer"]}</span>
					<img src={player1ImgSource} alt="" className="bg-myblue rounded-lg"></img>
					<div>
						<span className={"z-0 text-8xl " + scoreColor}>{props.gameState["score"] !== undefined ? Math.abs(props.gameState["score"]) : 0}</span>
						{ // TODO: maybe add some indicator as to who is currently winning
						/* <img src="https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif" alt="loading..." className="absolute z-1 left-0 right-0 bottom-0 top-0 m-auto" /> */}
					</div>

					<img src={player2ImgSource} alt="" className="bg-apple rounded-lg"></img>

					<button>
						<img src="rock.png" alt="Rock" onClick={() => { props.setPlayerMove("rock") }} className="border-2 border-white rounded-lg hover:bg-zinc-100"></img>
					</button>

					<button>
						<img src="paper.png" alt="Paper" onClick={() => { props.setPlayerMove("paper") }} className="border-2 border-white rounded-lg hover:bg-zinc-100"></img>
					</button>

					<button>
						<img src="scissors.png" alt="Scissors" onClick={() => { props.setPlayerMove("scissors") }} className="border-2 border-white rounded-lg hover:bg-zinc-100"></img>
					</button>

				</div>
			}
			{props.gameState["timer"] === 0 &&
				<GameEndPopup score={props.gameState["score"]} p1={props.gameState["p1"]} p2={props.gameState["p2"]} setGameState={props.setGameState}></GameEndPopup>
			}
		</div>
	);
}

export default GameScreen;
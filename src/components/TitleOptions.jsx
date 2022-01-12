import React from 'react';
import CreateGameForm from "./CreateGameForm"
import JoinGameForm from './JoinGameForm';


// tbh idk what the meta is on how small and specialized components are supposed to get
function TitleOptions(props) {
	return (
			<div className="grid grid-rows-2 lg:grid-cols-2 my-20 space-x-0 place-items-center">
					<JoinGameForm setGameState={props.setGameState} setName={props.setName} setRoom={props.setRoom}/>
					<CreateGameForm setGameState={props.setGameState} setName={props.setName} setRoom={props.setRoom}/>
			</div>
	);
}

export default TitleOptions;
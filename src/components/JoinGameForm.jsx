import React from 'react';
import { useState } from 'react';

function JoinGameForm(props) {

	function joinClicked() {
		props.setGameState("wait");
	}

	return (
		<div>
			<input type="text" placeholder="your name" onChange={(e) => {props.setName(e.target.value);}} className="w-72 lg:w-96 h-14 block mb-2 p-2 border-2 rounded-2xl focus:border-myblue focus:outline-none text-center"/>
			<input type="text" placeholder="room id"  onChange={(e) => {props.setRoom(e.target.value);}} className="w-72 lg:w-96 h-14 block mb-2 p-2 border-2 rounded-2xl focus:border-myblue focus:outline-none text-center"/>
			<div onClick={joinClicked}  className="border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200">
				join existing room
			</div>
		</div>
	);
}

export default JoinGameForm;
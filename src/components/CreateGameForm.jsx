import {React, useState} from 'react';

function CreateGameForm(props) {

	function createClicked() {
		var hri = require('human-readable-ids').hri;
		var generated = hri.random().replaceAll("-", "").replaceAll(/\d+/ig, "");

		props.setRoom(generated);
		props.setGameState("wait");
	}

	return (
		<div>
			<input type="text" placeholder="your name" onChange={(e) => {props.setName(e.target.value);}} className="w-72 lg:w-92 h-14 block mb-2 p-2 border-2 rounded-2xl focus:border-myblue focus:outline-none text-center"/>
			<div onClick={createClicked} className="border-2 border-green-400 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-400 hover:text-green-200">
				create new game
			</div>
		</div>
	);
}

export default CreateGameForm;
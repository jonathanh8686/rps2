import React from 'react';
import TitleOptions from "./TitleOptions"
import FadeIn from 'react-fade-in';


function TitleScreen(props) {
	return (
		<div className="content-center">
			<FadeIn delay='50'>
				<h1 className="text-5xl lg:text-7xl font-['Raleway'] my-10 font-little text-white">rock paper scissors 2</h1>
			</FadeIn>
			<FadeIn delay='250'>
				<TitleOptions setGameState={props.setGameState} setName={props.setName} setRoom={props.setRoom}></TitleOptions>
			</FadeIn>

			<div className="absolute inset-x-0 bottom-5">
				<span className="text-white">Created by </span>
				<a href="https://www.github.com/jonathanh8686" rel="noopener noreferrer" target="_blank" className="text-cyan-400">Jonathan Hsieh</a>
			</div>
		</div>
	);
};

export default TitleScreen;
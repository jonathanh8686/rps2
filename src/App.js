import './App.css';
import React from 'react';
import { useState } from 'react';
import TitleScreen from "./components/TitleScreen"
import WaitingScreen from './components/WaitingScreen';
import GameScreen from './components/GameScreen';
import { useEffect } from 'react';
import io from 'socket.io-client';


function App() {
  const [gameState, setGameState] = useState("title");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [socket, setSocket] = useState(null);

  const [waitingStatus, setWaitingStatus] = useState("");

  const [pregameCount, setPregameCount] = useState(3);
  const [playerMove, setPlayerMove] = useState("");
  const [serverGameState, setServerGameState] = useState({});

  useEffect(() => {
		const newSocket = io(process.env.REACT_APP_SERVER_URL, {transports: ['websocket']})
    setSocket(newSocket)
    return () => {
      newSocket.close()
    }
  }, []);

  useEffect(() => {
    if(gameState !== "play") return;
    console.log("emitting game action: " + playerMove)
    socket.emit("game-action", playerMove);
  }, [playerMove])

  useEffect(() => {
    function onWait() {
      socket.emit("game-join-request", { name: name, room: room});
      console.log("Requesting to join: " + room);

      socket.on("join-request-status", (args) => {
        if(args === "Success") {
          setWaitingStatus("successfully connected to server!");
        } else {
          setWaitingStatus("something went wrong! (invalid room or name?)")
          // if failed to join, send back to main screen
          setTimeout(() => {
            setGameState("title")
          }, 3000)
        }
      })

      socket.on("game-start", (args) => {
        if(args === "go ahead") setGameState("play");
      })
    }

    function onPlay() {
      socket.on("count-down", (args) => {
        setPregameCount(args);
      })

      socket.on("game-state", (args) => {
        setServerGameState(args)
      })
    }

    console.log("Game State: " + gameState);
    if(gameState === "title") {
      setRoom("");
      setName("");
      setWaitingStatus("");
      setPregameCount(0);
      setPlayerMove("");
      setServerGameState({});
    }
    else if(gameState === "wait") {
      onWait()
    }
    else if(gameState === "play") {
      onPlay()
    }
  }, [gameState]);

  return (
    <div className="App">
      {gameState==="title" && <TitleScreen setGameState={setGameState} setName={setName} setRoom={setRoom} />}
      {gameState==="wait" && <WaitingScreen setGameState={setGameState} name={name} room={room} waitingStatus={waitingStatus}/>}
      {gameState==="play" && <GameScreen setGameState={setGameState} countdown={pregameCount} gameState={serverGameState} setPlayerMove={setPlayerMove} />}
    </div>
  );
}

export default App;

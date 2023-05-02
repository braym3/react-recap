import { useState } from "react";
import AddGamers from "./AddGamers";
import GameRoom from "./GameRoom";

const Game = () => {
    const [playerName, setPlayerName] = useState(""); // stores player name
    const [players, setPlayers] = useState([]); // stores array of players
    const [idCount, setIdCount] = useState(0); // store count for player id

    const newPlayer = ({target}) => {
        setPlayerName(target.value); // set player name to input target value
    }

    const handleAdd = (e) => {
        e.preventDefault(); // prevent form submission on click
        setIdCount(idCount + 1);
        setPlayers(players => [...players, { id: idCount, name: playerName }]); // save playerName into the array
        console.log(players);
    }

    return(
        <>
            <AddGamers newPlayer={newPlayer} handleAdd={handleAdd}/>
            <GameRoom players={players}/>
        </>
    );
};

export default Game;
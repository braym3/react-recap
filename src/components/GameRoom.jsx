const GameRoom = ({players}) => {

    const Display = ({name}) => {
        <li> {name} </li>;
    };
    
    return(
        <ul>
            {players.map((player) => (
                // <Display key={player.id} playerName={player.playerName}/>
                <li key={player.id}> {player.name} </li>
            ))}
        </ul>
    );
};

export default GameRoom;
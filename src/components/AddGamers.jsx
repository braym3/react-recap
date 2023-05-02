const AddGamers = ({newPlayer, handleAdd}) => { // newPlayer function passed as prop
    return( // name input has event listener - invokes newPlayer function
        <form>
            <input type="text" placeholder="Enter name:" onChange={newPlayer}/>
            <button type="button" onClick={handleAdd}> Add Player </button>
        </form>
    );
};

export default AddGamers;
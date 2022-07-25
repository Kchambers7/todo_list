



const ToDo = (props) => {

    return  (
        <div>
            <span style={props.toDoItem.isDone ? {textDecoration: "line-through"} : {}}>{props.toDoItem.name}</span>

            <input onChange={(event) => {props.toggleIsDone(props.i);}}type="checkbox"/>

            <button onClick={(event) => {props.deleteToDo(props.i);}}>Delete</button>
        </div>
    );
}
export default ToDo;
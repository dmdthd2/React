import React from "react";
import TodoItem from "./todoItem.jsx";

function TodoBoard(props){

    return(
        <div>
            <h1>TodoList</h1>
            {props.todolist.map((gg)=><TodoItem gg={gg}/>)}
            
        </div>
            
        
        

    )
}
export default TodoBoard
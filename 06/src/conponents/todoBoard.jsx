import React from "react";
import TodoItem from "./TodoItem.jsx";

function TodoBoard(props){
    return(
        <>
        <h1>todoList</h1>
        {props.todoList.map((item)=><TodoItem item={item}/>)}
        
        </>
    )
        
    
}
export default TodoBoard
import React from "react";

function TodoItem(props){

    return(
        <div className="todoI">
            {props.item}
        </div>
    )
}
export default TodoItem
import React from "react";

function H(props){
    return(
        
        <div className="H">
            <div>
                {props.item}
            </div>
         {props.name}
         {props.age}
         {props.intro}
        </div>
        )
}
export default H
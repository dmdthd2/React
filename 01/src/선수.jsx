import React from "react";

function 영진bar(props){
  const clickMe = () => {
    return(
    alert (props.name+"선수 초이스 !")
    )
  }
  return(
    
      <div className="영진bar">
        {props.num}번 선수:&nbsp;
        {props.name}&nbsp;&nbsp;
        {props.av} &nbsp;
        {props.mt}
        <button onClick={clickMe}>초이스</button>
        
      </div>
    
  )

}
export default 영진bar;
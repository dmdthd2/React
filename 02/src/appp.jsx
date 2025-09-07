import React,{useState } from "react";


function All(){
    const[count,setCount]=useState(0);
    
        function increse(){
            setCount(count+1);
        }

        function decrese(){
            setCount(count-1);
        }

        function reset(){
            setCount(0);
        }
        return(
        <div>
            <h1>{count}</h1>
           <button onClick={increse}>증가</button>
           <button onClick={decrese}>감소</button>
           <button onClick={reset}>초기화</button>
        </div>
        
        )
}
export default All;



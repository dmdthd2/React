import React from "react";
import BkItem from "./bkItem";


function BkBoard(props){
    return(
        <div className="bk-borad">
            <h1>버킷리스트</h1>
            {props.bkList.map((item)=><BkItem item={item}/>)}
        </div>
    )
}
export default BkBoard
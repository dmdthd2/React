import React from "react";
import H from "./H.jsx";

function HBoard(props){
    return(
    <div className="B">
    <h1>선수리스트</h1>
        {props.add.map((item)=><H item={item}/>)}
       <H name="김재우" age="25" intro="저는 멸치구요 여자와 술을 좋아해요 지금,,, 모든게 완벽해..!"/>
       <H name="홍영진" age="23" intro="저도 멸치구요 뭐요; "/>
       <H name="권민재" age="24" intro="테토... 끝..."/>
    
    
    </div>
    )
}
export default HBoard
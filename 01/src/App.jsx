import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 영진bar from './선수.jsx'

function App(){
  return(
    <main>
      
        <영진bar name="김재우" av="전 벤치프렉스 60kg 입니다!" num="1" mt="뽑아줘요 누나 ㅎㅎ"/>
        <영진bar name="홍영진" av="손기술이 특기인데여;" num="2" mt="극락가실래여?;"/>
        <영진bar name="권민재" av="전 술못하는데 누나를 위해서 무리하지 뭐" num="3" mt="저런 멸치들 말고 나랑 놀자 ㅎㅎ"/>
        
      
    </main>
  )
}



export default App;

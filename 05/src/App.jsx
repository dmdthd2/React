import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BkBoard from './components/bkBoard.jsx'

function App() {
  const[input,setInput]= useState("")
  const[bkList,setBklist]=useState([])
  const add=()=>{
    setBklist([...bkList,input])
    

  }

  return (
    <main>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={add}>추가</button>
      <BkBoard bkList={bkList}/>
    </main>
  )
}

export default App

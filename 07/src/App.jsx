import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HBoard from './com/HBoard.jsx'

function App() {
  const[input,setInput]=useState("")
  const[add,setadd]=useState([])
  const addH=()=>{
    setadd([...add,input])

  }
  return (
    <>
    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} />
    <button onClick={addH}>선수등록</button>
    <HBoard add={add}/>
    </>
  )
}

export default App

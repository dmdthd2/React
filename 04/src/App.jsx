import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoBoard from './components/todoboard.jsx'

function App() {
  const [input,setInput]=useState("")
  const [todolist,settodolist]=useState([])
  const add=()=>{
    settodolist([...todolist,input])
    

  }
  return(
    <main>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/>
       <button onClick={add}>추가</button>
       <TodoBoard todolist={todolist}/>
    </main>
    
   
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoBoard from './conponents/todoBoard.jsx'

function App() {
  const[inputValue,setinputvalue]=useState("")
  const[todoList,setTodoList]=useState([])
  const addItem=()=>{
    setTodoList([...todoList,inputValue])
  }

  return (
    <>
    <input value={inputValue} type="text" onChange={(event)=>setinputvalue(event.target.value)}/>
    <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList}/>
    
    </>
    
  )
}

export default App

import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoBoard from './components/TodoBoard'



function App() {
  const [inputValue, setinputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const addItem = () => {
    console.log(inputValue)
    setTodoList([...todoList, inputValue])
  }

  return (
    <main>
      <div>
        <input value={inputValue} type="text" onChange=
        {(event)=>setinputValue(event.target.value)}/>
        <button onClick={addItem}>추가</button>
        
        <TodoBoard todoList={todoList}/>
      </div>
    </main>
   
     
       
  )
}

export default App

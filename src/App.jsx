
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { useState } from 'react'
import TodoContext from './Context/TodoContext'




function App() {
  

  const [list, setList] = useState([
        {
            id:1,
            todoData:"Jeevan",
            finished: false
        },
        {
            id:2,
            todoData:"Shivi",
            finished: false
        },
        {
            id:3,
            todoData:"Shivi",
            finished: false
        }
    ])



  return (



    <TodoContext.Provider value={{list,setList}}>
    <h1>Hello</h1>
      <AddTodo handleOnClick = {(inputValue)=>{
       inputValue != "" && setList([...list,{id:list.length +1, todoData:inputValue, finished:false}])
      }}/>
      <TodoList/>

    </TodoContext.Provider>
     
  

      

  )
}

export default App

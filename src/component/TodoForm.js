import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList';

export default function TodoForm({todoList,setTodoList}) {
   let idRnd=uuid().slice(0,8)
  let date=new Date() 
  const [todo,setTodo] = useState('')

  const handleOnChange=(e)=>{
      setTodo(e.target.value)
  }
  // const addTask=(prevState)=>{
  //   let copy=[...prevState]
  //   copy=[...copy,{id:prevState.length+1,task:todo,complete:false}]
  //   setTodoList(copy)
  // }
  const handleOnSubmit=(e)=>{
    e.preventDefault()

    const addTodo = todo=>{
      if(!todo.task|| /^\s*$/.test(todo.task)){
        return;
      }
      const newTodos=[todo,...todoList]
      setTodoList(newTodos)
    }
    
    setTodoList((prevState) =>{
      const initVal={
        id: idRnd, 
        task:todo,
        complete: false,
        time: date,
        remove:false
      }

      return [{initVal},...prevState]
    })
     
    //addTask(todo)
    //console.log(todo.task)
    setTodo('')
  }
    return (
    <form onSubmit={handleOnSubmit} className='flex-form'>
     
        <input type="text" placeholder='enter Todo...' value={todo} onChange={handleOnChange}>
          
        </input>
        <AddIcon/>
    </form>
  )
}

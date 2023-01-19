import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

export default function TodoForm({setTodoList}) {
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

    setTodoList((prevState) => [{todo},...prevState])
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

import React, { useState } from 'react'

export default function TodoForm({count,setCount,setTodoList}) {
  const [todo,setTodo] = useState('')
 
    const handleOnChange=(e)=>{
        setTodo(e.target.value)
        
  }
  const addTask=(prevState)=>{
    let copy=[...prevState]
    copy=[...copy,{id:count+1,task:todo,complete:false}]
    setTodoList(copy)
    setCount(count+1)
  }
  const handleOnSubmit=(e)=>{
    e.preventDefault()
    addTask(todo)
    setTodo('')
  }
    return (
    <form onSubmit={handleOnSubmit} className='flex-form'>
        <input type="text" placeholder='enter Todo...' value={todo} onChange={handleOnChange}>

        </input>
    </form>
  )
}

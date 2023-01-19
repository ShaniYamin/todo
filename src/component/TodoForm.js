import React, { useState } from 'react'

export default function TodoForm({setTodoList}) {
  const [todo,setTodo] = useState('')
 
    function handleOnChange(e){
        setTodo(e.target.value)
        
  }
  function handleOnSubmit(e){
    e.preventDefault()

    setTodoList((prevState) => [todo,...prevState])
    setTodo('')
  }
    return (
    <form onSubmit={handleOnSubmit} className='flex-form'>
        <input type="text" placeholder='enter Todo...' value={todo} onChange={handleOnChange}>

        </input>
    </form>
  )
}

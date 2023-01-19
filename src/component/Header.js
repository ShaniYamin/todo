import React from 'react'
import TodoForm from './TodoForm'

export default function Header({count,setCount,setTodoList}) {

    return (
    <header className='com_header'>
        <h1 className='headline'>ToDo</h1>
        <TodoForm setTodoList={setTodoList} count={count} setCount={setCount}/>
    </header>
  )
}

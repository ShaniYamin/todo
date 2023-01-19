import React from 'react'

export default function TodoItem({todo,todoList, setTodoList}) {
    const handleDelete = (todo) => {
        setTodoList((prevState) => prevState.filter(item => item !== todo))
        }
    return (
    <li className='row_todo' onClick={()=>handleDelete(todo)}>
        <label for="item" class="text">{todo}</label>
       
    
    </li>
  )
}

import React from 'react'

export default function TodoItem({todo,todoList, setTodoList}) {
    const handleDelete = (todo) => {
        setTodoList((prevState) => prevState.filter(item => item.task !== todo.task))
     }
    const completedTask=(todo)=>{
        <span style={{textDecoration: 'line-through'}}>{todo.task}
        </span>
    } 
    return (
    <div>
    {/* <button>done</button> */}
    <li className='row_todo' /*onClick={()=>handleDelete(todo)}*/>
        <label for="item" class="text">{todo.task}</label>
       
    </li>
     {/* <button className='rm_btn' onC={handleDelete(todo)}>rm</button> */}
    </div>
  )
}

import React from 'react'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function TodoItem({todo,todoList, setTodoList}) {
    const handleDelete = (todo) => {
        setTodoList((prevState) => prevState.filter(item => item!== todo))
     }
    const completedTask=(todo)=>{
        <span style={{textDecoration: 'line-through'}}>{todo}
        </span>
    } 
    return (
    <div>
    {/* <button>done</button> */}
    <li className='row_todo' >
        <label for="item" class="text" onClick={()=>handleDelete(todo)}>{todo}</label>
       <RadioButtonUncheckedIcon onClick={()=>completedTask(todo)}/>
    </li>
     {/* <button className='rm_btn' onC={handleDelete(todo)}>rm</button> */}
    </div>
  )
}

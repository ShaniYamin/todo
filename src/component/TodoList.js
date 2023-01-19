import React from 'react'
import TodoItem from './TodoItem'
//import AddIcon from '@mui/icons-material/Add';

export default function TodoList({todoList, setTodoList}) {
  // const handleDelete = (todo) => {
  //   setTodoList((prevState) => prevState.filter(item => item !== todo))
  // }
    return (
      <div className='list'>
        <ul className='list_todo'>
            {
            todoList.map((todo)=>{
                return <TodoItem todo={todo} todoList={todoList} setTodoList={setTodoList}/>  
                //<li className='row_todo' onClick={() => handleDelete(todo)}> {todo}</li>
            })
        }
        </ul>
    </div>
  )
}

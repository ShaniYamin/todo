import { useState } from 'react';
import './App.css';
import './index.css';
import Header from './component/Header';
import TodoList from './component/TodoList';

function App() {
  const [todoList,setTodoList]=useState([])
  return (
    <div className="App">
        <Header setTodoList={setTodoList}/>
        <TodoList todoList={todoList} setTodoList={setTodoList}/>
    
    </div>
  );
}

export default App;

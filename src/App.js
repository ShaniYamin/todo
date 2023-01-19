import { useState } from 'react';
import data from "./data.json";
import './App.css';
import './index.css';
import Header from './component/Header';
import TodoList from './component/TodoList';

function App() {
  const [todoList,setTodoList]=useState(data)
  const [count,setCount]=useState(data.length)
  return (
    <div className="App">
        <Header setTodoList={setTodoList}/>
        <TodoList todoList={todoList} setTodoList={setTodoList} count={count} setCount={setCount}/>
    
    </div>
  );
}

export default App;

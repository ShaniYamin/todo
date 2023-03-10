import { useState } from 'react';
//import data from "./data.json";
import './App.css';
import './index.css';
import Header from './component/Header';
import TodoList from './component/TodoList';

function App() {
  const [todoList,setTodoList]=useState([])
  return (
    <div className="App">
        <Header todoList={todoList} setTodoList={setTodoList}/>
        <TodoList todoList={todoList} setTodoList={setTodoList}/>
    
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import TodoForms from './components/TodoForms';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <TodoList/>
    </div>
  );
}

export default App;

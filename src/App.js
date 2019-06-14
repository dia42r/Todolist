import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import TodoList from './Todo/TodoList';
import User from './user/User';
import Toggle from "./Toggle/Toggle"

function App() {
  return (
    <div>
      <Home name="DIARRA"></Home>
      <TodoList></TodoList>
      <User/>
    </div>
  );
}

export default App;

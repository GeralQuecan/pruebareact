import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos.json';
import Navigation from './componentes/Navigation';
import Balance from './componentes/Balance';

class App extends Component{
  constructor(){
    super();
    this.state ={
      todos
      
    }
  }

  render(){
    const todos = this.state.todos.map((todo,i) => {
      return(
        <div className="fab fa-uber txt-li">
        {todo.title}
        {todo.valor}
        </div>
      )
    }
    )
  



  return (
    <div className="App">
      <Navigation />
      <Balance />
      {todos}
    </div>    
  );
}
}


export default App;

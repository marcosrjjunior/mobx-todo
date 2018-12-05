import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import store from './TodoStore';

class App extends Component {
  render() {
    return (
      <TodoList store={store} />
    );
  }
}

export default App;

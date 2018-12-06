import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import store from './TodoStore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList store={store} />
      </div>
    );
  }
}

export default App;

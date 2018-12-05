import React, { Component } from 'react';
import { observer } from 'mobx-react';

const TodoList = observer(class TodoList extends Component {
  render() {
    return (
        <h1>{this.props.store.todos[0]}</h1>
    );
  }
})

export default TodoList;

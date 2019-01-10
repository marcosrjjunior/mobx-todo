import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './TodoList.css';

const TodoList = observer(class TodoList extends Component {
    filter = (e) => {
      this.props.store.filter = e.target.value
    }

    createNew = (e) => {
      if (e.which === 13 && e.target.value) {
        this.props.store.createTodo(e.target.value)
        e.target.value = ''
      }
    }

    toggleComplete = (todo) => {
      todo.complete = !todo.complete
    }

    render() {
      const { clearComplete, todos, filteredTodos, filter } = this.props.store

      const todoList = filteredTodos.map(todo => (
        <li key={todo.id}>
          <span className={'todo ' + (todo.complete ? 'completed' : '')}>{todo.value}</span>
          <input type="checkbox" 
            className="check"
            onChange={this.toggleComplete.bind(this, todo)}
            value={todo.complete}
            checked={todo.complete}
          />
        </li>
      ))

      return (
        <div>
            <h1>todos</h1>
            <div>
              <input className="create" placeholder="create (enter)" onKeyPress={this.createNew} />
            </div>
            <div>
              <input className="filter" placeholder="filter" value={filter} onChange={this.filter} />
            </div>
            count {filteredTodos.length}

            <ul>{todoList}</ul>

            <a href="#" className="clear" onClick={clearComplete}>clear complete</a>
        </div>
      );
  }
})

export default TodoList;

import { observable, computed, action, decorate } from 'mobx';
import Todo from './Todo';

class TodoStore {
    todos = []
    filter = ''
    get filteredTodos() {
        // var matchesFilter = new RegExp(this.filter, 'i')
        // matchesFilter.test(todo)
        return this.todos.filter(todo => !this.filter || todo.value.indexOf(this.filter) !== -1)
    }

    createTodo(value) {
        this.todos.push(new Todo(value))
    }

    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.complete)
        this.todos.replace(incompleteTodos)
    }
}

decorate(TodoStore, {
    todos: observable,
    filter: observable,
    filteredTodos: computed,
    createTodo: action,
    clearComplete: action,
})

var store = window.store = new TodoStore();

export default store;

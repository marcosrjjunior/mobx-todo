import { autorun, observable, decorate } from 'mobx';

class TodoStore {
    todos = ['buy milk', 'buy eggs'];
    filter = '';
}

decorate(TodoStore, {
    todos: observable,
    filter: observable
})

var store = window.store = new TodoStore();

export default store;

autorun(() => {
    console.log(store.filter);
    console.log(store.todos[0]);
})
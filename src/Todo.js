import { observable, decorate } from 'mobx';

class Todo {
    value
    id
    complete

    constructor(value) {
        this.value = value
        this.id = Date.now()
        this.complete = false
    }
}

export default decorate(Todo, {
    id: observable,
    value: observable,
    complete: observable,
})
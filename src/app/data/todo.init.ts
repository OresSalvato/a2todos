// data object
import { TodoItem } from '../data/todo';

export class Init {
    constructor(name: string) {
        this.load(name);
    }
    private load(name: string) {
        if (localStorage.getItem(name) === null || localStorage.getItem(name) === undefined) {
            console.log('init: No Todos found...');
            console.log('init: Create Initial Todos...');
            let todoList: Array<TodoItem> = new Array<TodoItem>();
            todoList.push(new TodoItem({
                id: 1,
                text: 'test1'
            }));
            todoList.push(new TodoItem({
                id: 2,
                text: 'test2'
            }));
            todoList.push(new TodoItem({
                id: 3,
                text: 'test3'
            }));
            localStorage.setItem(name, JSON.stringify(todoList));
            return;
        } else {
            console.log('init: Todos found...');

        }
    }
}

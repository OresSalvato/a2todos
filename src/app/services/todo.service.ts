import { Injectable } from '@angular/core';
import { BaseService } from './baseService';

// data object
import { TodoItem } from '../data/todo';
// init person list
import { Init } from '../data/todo.init';

@Injectable()
export class TodoService extends BaseService<TodoItem> {
  prefix = 'service<TodoService>:';
  name = 'todo';
  list;
  constructor() {
    super('todo', 'service<TodoService>:');
    console.log(this.prefix, ' TodoService Initialized ...');
    
    let ini: Init = new Init('todo');
     this.list = super.getList();
  }

 

  create(newTodo: TodoItem) {
    let todoList: Array<TodoItem> = super.getList();
    // add next ID
    // newPersonCard.id = personalCardList[personalCardList.length].id + 1;
    // Add new Todo item
    todoList.push(newTodo);
    super.resetObj(todoList);
  }

  update(currentIndex: number, todo: TodoItem) {
    let personalCardList: Array<TodoItem> = super.getList();
    personalCardList[currentIndex] = todo;
    super.resetObj(personalCardList);
  }

  delete(currentIndex: number) {
    let todoList: Array<TodoItem> =super.getList();
    todoList.splice(currentIndex, 1);
    super.resetObj(todoList);
  }
}

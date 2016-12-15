import { Component, OnInit, Input } from '@angular/core';
// services
import { TodoService } from '../../services/todo.service';
// globals
import { Globals } from '../../globals';
import { eState, eStateObject } from '../../data/state';
// data object
import { TodoItem } from '../../data/todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  private _todo;

  @Input('todoList') todoList: Array<TodoItem>;
  @Input()
  set todo(todo: TodoItem) {
    this._todo = todo;
  }
  get todo(): TodoItem {
     return this._todo; }

  private prefix = 'component<TodoComponent> :';
  private _eState: typeof eState = eState; // enum object to access from template
  private _state: eState = eState.Default; // instance state object
  constructor(private _todoService: TodoService, private globals: Globals) { }

  ngOnInit() {
  }

  addTodo(newTodo: TodoItem) {
    console.log(this.prefix, ' add');
    newTodo.id = 5;
    this.todoList.push(newTodo);
    this._todoService.create(newTodo);
    this._state = eState.Default;
  }

  updateTodo() {
    console.log(this.prefix, ' update');
    let currentIndex: number;
    let currentTodoItem: TodoItem = this._todo;
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id === this._todo.id) {
        currentTodoItem.text = this.todo.text;
      currentIndex = i;
        break;
      }
    }
    this._todoService.update(currentIndex, currentTodoItem);
    this._state = eState.Default;
  }
  editTodo(todo: TodoItem) {
    console.log(this.prefix, ' edit');
    this._state = eState.Edit;
    this.todo = todo;
    //this.globals.currentTodo = id;
    //this.todoHistory = this.todo;

  }

  deleteTodo(todo: TodoItem) {
    console.log(this.prefix, ' delete');
    let currentIndex: number;
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id === this._todo.id) {
        this.todoList.splice(i, 1);
        currentIndex = i;
        break;
      }
    }
    this._todoService.delete(currentIndex);
  }
}

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
// globals
import { Globals } from '../../globals';
import { eState } from '../../data/state';
// data object
import { TodoItem } from '../../data/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Array<TodoItem> = this._todoService.getList();
  todo;
  todoHistory;

  private prefix = 'component<TodosComponent> :';
  private _eState : typeof eState = eState;
  constructor(private _todoService: TodoService,private globals: Globals) { }

  ngOnInit() {
     // this.todoList = this._todoService.getList();
  }

}

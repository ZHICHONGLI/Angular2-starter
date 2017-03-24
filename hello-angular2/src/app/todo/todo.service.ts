import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Todo } from './todo.model';
import { UUID } from 'angular2-uuid';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  todos: Todo[] = [];

  constructor() { }
  addTodo(todoItem:string): Todo[]{
   // let iid = parseFloat(UUID.UUID()) ;
    let todo = {
   //   id: iid,
      id: UUID.UUID(),
      desc: todoItem,
      completed: false
    }
    this.todos.push(todo);
    return this.todos;
  }
}

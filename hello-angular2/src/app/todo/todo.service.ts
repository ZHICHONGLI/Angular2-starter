import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { UUID } from 'angular2-uuid';

import 'rxjs/add/operator/toPromise';
import { Todo } from '../domain/entities';
@Injectable()
export class TodoService {

// WebApi 
//private api_url = 'api/todos';
private api_url = 'http://localhost:3000/todos';
private headers = new Headers ({'Content-Type':'application/json'});

//  todos: Todo[] = [];

  constructor(private http: Http) { }

  // POST todos
  addTodo(desc:string): Promise<Todo> {
    //"+" can be used for parsing string to number
    const userId:number = +localStorage.getItem('userId');
   // let iid = parseFloat(UUID.UUID()) ;
    let todo = {
   //   id: iid,
      id: UUID.UUID(),
      desc: desc,
      completed: false,
      userId
    };
    //this.todos.push(todo);
    //return this.todos;
    return this.http
            .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
            .toPromise()
            //.then(res => res.json().data as Todo)
            .then(res =>res.json() as Todo)
            .catch(this.handleError);
  }
    // PUT /todos/:id
  toggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.api_url}/${todo.id}`;
    console.log(url);
    let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
            .patch(url, JSON.stringify(updatedTodo), {headers: this.headers})
            .toPromise()
            .then(() => updatedTodo)
            .catch(this.handleError);
  }
  // DELETE /todos/:id
  deleteTodoById(id: string): Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
  }
  // GET /todos       // could be removed after using filter routing
  getTodos(): Promise<Todo[]>{
    const userId = +localStorage.getItem('userId');
    const url = `${this.api_url}/?userId=${userId}`
    return this.http.get(url)
              .toPromise()
              //.then(res => res.json().data as Todo[])
              .then(res => res.json() as Todo[])
              .catch(this.handleError);
  }

  // GET /todos?completed=true/false
  filterTodos(filter: string): Promise<Todo[]> {
    const userId:number = +localStorage.getItem('userId');
    const url = `${this.api_url}/?userId=${userId}`;
    switch(filter){
      case 'ACTIVE': return this.http
                        .get(`${url}?completed=false`)
                        .toPromise()
                        .then(res => res.json() as Todo[])
                        .catch(this.handleError);
      case 'COMPLETED': return this.http
                          .get(`${url}?completed=true`)
                          .toPromise()
                          .then(res => res.json() as Todo[])
                          .catch(this.handleError);
      default:
        return this.getTodos();
    }
  }



  private handleError(error: any): Promise<any>{
    console.error('ERROR: ', error);
    return Promise.reject(error.message || error);
  }
}

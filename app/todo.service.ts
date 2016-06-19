import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Todo } from './todo';

@Injectable()

export class TodoService {

  private todosUrl = 'app/todos';  // URL to web api

  constructor(private http: Http) { }

  getTodos(): Promise<Todo[]> {
    return this.http.get(this.todosUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
    
  }

  getTodo(id: string) {
    return this.getTodos()
      .then(todos => todos.filter(todo => todo.id === id)[0]);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


  // Add new todo
  private post(todo: Todo): Promise<Todo> {
    let headers = new Headers({
      'Content-Type': 'application/json' 
    });

    return this.http
      .post(this.todosUrl, JSON.stringify(todo), { headers: headers })
      .toPromise()
      .then(response => response.json().data())
      .catch(this.handleError);
  }

  // Update existing todo
  private put(todo: Todo) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    let url = `${this.todosUrl}/${todo.id}`;

    return this.http
      .put(url, JSON.stringify(todo), { headers: headers })
      .toPromise()
      .then(() => todo)
      .catch(this.handleError);
  }

  // Delete todo
  delete(todo: Todo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.todosUrl}/${todo.id}`;

    return this.http
      .delete(url, headers)
      .toPromise()
      .catch(this.handleError);
  }

  save(todo: Todo): Promise<Todo> {
    if (todo.id) {
      return this.put(todo);
    }

    return this.post(todo);
  }
}
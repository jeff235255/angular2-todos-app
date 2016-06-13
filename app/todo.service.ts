import { Injectable } from '@angular/core';
import { TODOS } from './mock-todos'
import { Todo } from './todo';

@Injectable()

export class TodoService {
  getTodos() {
    return Promise.resolve(TODOS);
  }

  getTodosSlowly() {
    return new Promise<Todo[]>(resolve =>
      setTimeout(() => resolve(TODOS), 200)

    );
  }

  getTodo(id: string) {
    return this.getTodos()
      .then(todos => todos.filter(todo => todo.id === id)[0]);
  }
}
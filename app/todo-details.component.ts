import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-todo-detail',
  templateUrl: 'app/todo-details.component.html',
})

export class TodoDetailsComponent implements OnInit {
  todo: Todo;

  constructor(
    private todoService: TodoService,
    private routesParams: RouteParams
  ) { }

  ngOnInit() {
    let id = this.routesParams.get('id');
    this.todoService.getTodo(id).then(todo => this.todo = todo);
  }

  goBack() {
    window.history.back();
  }
}

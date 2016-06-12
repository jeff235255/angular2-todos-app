import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService){}

  ngOnInit() {
    this.todoService.getTodos()
      .then(todos => this.todos = todos.slice(1, 5));
  }
  gotoDetail() { /* not implemented yet */ }

}
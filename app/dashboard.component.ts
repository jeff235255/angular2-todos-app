import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  todos: Todo[] = [];
  constructor(
    private todoService: TodoService,
    private router: Router ){

  }

  ngOnInit() {
    this.todoService.getTodos()
      .then(todos => this.todos = todos.slice(1, 5));
  }
  gotoDetail(todo: Todo) {
    let link = ['TodoDetail', { id: todo.id }];
    this.router.navigate(link);
  }

}
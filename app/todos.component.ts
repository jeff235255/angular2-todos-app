import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Todo } from './todo';
import { TodoDetailsComponent } from './todo-details.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-todos',
  templateUrl: 'app/todos.component.html',
  styleUrls: ['app/todos.component.css'],
  directives: [TodoDetailsComponent]
})

export class TodosComponent implements OnInit { 
  title = "Todos app";
  selectedTodo: Todo;
  todos: Todo[];

  constructor(
    private router: Router,
    private todoService: TodoService
  ){
  }

  getTodos() {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }

  ngOnInit() {
    this.getTodos();
  }
  
  onSelect(todo: Todo) { this.selectedTodo = todo; }

  gotoDetail() {
    this.router.navigate(['TodoDetail', { id: this.selectedTodo.id }]);
  }
}
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
  todos: Todo[];
  selectedTodo: Todo;
  addingTodo = false;
  error: any;

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
  
  onSelect(todo: Todo) {
    this.selectedTodo = todo; 
    this.addingTodo = false;
  }

  gotoDetail() {
    this.router.navigate(['TodoDetail', { id: this.selectedTodo.id }]);
  }

  addTodo() {
    this.addingTodo = true;
    this.selectedTodo = null;
  }

  close(savedTodo: Todo) {
    this.addingTodo = false;
    if (savedTodo) { this.getTodos(); }
  }

  delete(todo: Todo, event: any) {
    event.stopPropagation();
    this.todoService
      .delete(todo)
      .then(res => {
        this.todos = this.todos.filter(t => t !== todo);
        if (this.selectedTodo === todo) { this.selectedTodo = null; }
      })
      .catch(error => this.error = error);
  }
}
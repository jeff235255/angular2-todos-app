import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-todo-detail',
  templateUrl: 'app/todo-details.component.html'
})

export class TodoDetailsComponent implements OnInit {
  @Input() todo: Todo;
  @Output() close = new EventEmitter();
  
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private todoService: TodoService,
    private routesParams: RouteParams
  ) { }

  ngOnInit() {
    if (this.routesParams.get('id') !== null) {
      let id = this.routesParams.get('id');
      this.navigated = true;
      this.todoService.getTodo(id).then(todo => this.todo = todo);
    } else {
      this.navigated = false;
      this.todo = new Todo();
    }
    
  }

  save() {
    this.todoService
      .save(this.todo)
      .then(todo => {
        this.todo = todo;
        this.goBack(todo);
      })
      .catch(error => this.error = error);
  }

  goBack(saveTodo: Todo = null ) {
    this.close.emit(saveTodo);
    if (this.navigated) { window.history.back(); }
  }
}

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoDetailsComponent } from './todo-details.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'todos-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My todos list</h2>
    <ul class="todos">
      <li *ngFor="let todo of todos" (click)="onSelect(todo)" [class.selected] = "todo === selectedTodo">
        <span class="badge">{{todo.id}}</span> {{todo.name}}
      </li>
    </ul>
    <my-todo-detail [todo]="selectedTodo"></my-todo-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .todos {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .todos li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .todos li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .todos li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .todos .text {
      position: relative;
      top: -3px;
    }
    .todos .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  directives: [TodoDetailsComponent],
  providers: [TodoService]
})

export class AppComponent { 
  title = "Todos app";
  selectedTodo: Todo;
  todos: Todo[];

  getTodos() {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }

  ngOnInit() {
    this.getTodos();
  }
  constructor(private todoService: TodoService) { }
  onSelect(todo: Todo) { this.selectedTodo = todo; }
}
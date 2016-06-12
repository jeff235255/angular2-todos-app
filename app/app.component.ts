import { Component } from '@angular/core';

export class Todo {
  id: string;
  name: string;
  detail: string;
}

var TODOS: Todo[] = [
  { id: '01', name: 'Python', detail: 'Python with DJAngo FW' },
  { id: '02', name: 'Ruby', detail: 'Ruby with Ruby on rails FW' },
  { id: '03', name: 'Angular 2', detail: 'Angular 2 with Type Script' },
  { id: '04', name: 'React JS', detail: 'Native React with Redux FW' },
  { id: '05', name: 'C#', detail: 'C# language' },
  { id: '06', name: 'Java', detail: 'Spring FW' },
  { id: '07', name: 'Ember JS', detail: 'Ember JS with new features' },
  { id: '08', name: 'C', detail: 'C for beginer' },
  { id: '09', name: 'C++', detail: 'C++' },
  { id: '10', name: 'Drupal', detail: 'Drupal CMS' }
];

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
    <div *ngIf="selectedTodo">
      <h2>{{selectedTodo.name}} details!</h2>
      <div><label>id: </label>{{selectedTodo.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedTodo.name" placeholder="name"/>
      </div>
      <div>
        <label>Detail: </label>
        <input [(ngModel)]="selectedTodo.detail" placeholder="detail">
      </div>
    </div>
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
  `]
})

export class AppComponent { 
  title = "Todos app";
  todos = TODOS;
  selectedTodo: Todo;
  onSelect(todo: Todo) { this.selectedTodo = todo; };
}
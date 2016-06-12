import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'my-todo-detail',
  template: `
    <div *ngIf="todo">
      <h2>{{todo.name}} details!</h2>
      <div><label>ID: </label>{{todo.id}}</div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="todo.name" placeholder="name"/>
      </div>
      <div>
        <label>Detail: </label>
        <input [(ngModel)]="todo.detail" placeholder="detail"/>
      </div>
    </div>
  `
})

export class TodoDetailsComponent {
  @Input()
  todo: Todo;
}
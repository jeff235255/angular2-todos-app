import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { TodoService } from './todo.service';
import { TodosComponent } from './todos.component';
import { DashboardComponent } from './dashboard.component';
import { TodoDetailsComponent } from './todo-details.component'

@Component({
  selector: 'todos-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    TodoService
  ]

})

@RouteConfig([
  {
    path: '/todos',
    name: 'Todos',
    component: TodosComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'TodoDetail',
    component: TodoDetailsComponent
  }
])

export class AppComponent {
  title = "Todos app";
}
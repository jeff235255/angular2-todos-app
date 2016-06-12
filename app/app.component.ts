import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { TodoService } from './todo.service';
import { TodosComponent } from './todos.component';
import { DashboardComponent } from './dashboard.component';
import { TodoDetailsComponent } from './todo-details.component'

@Component({
  selector: 'todos-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Todos']">Todos</a>
    </nav>
    <router-outlet></router-outlet>
  `,
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
    name: 'HeroDetail',
    component: TodoDetailsComponent
  }
])

export class AppComponent {
  title = "Todos app";
}
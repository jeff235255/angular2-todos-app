"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());
exports.Todo = Todo;
var TODOS = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Todos app";
        this.todos = TODOS;
    }
    AppComponent.prototype.onSelect = function (todo) { this.selectedTodo = todo; };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todos-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My todos list</h2>\n    <ul class=\"todos\">\n      <li *ngFor=\"let todo of todos\" (click)=\"onSelect(todo)\" [class.selected] = \"todo === selectedTodo\">\n        <span class=\"badge\">{{todo.id}}</span> {{todo.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedTodo\">\n      <h2>{{selectedTodo.name}} details!</h2>\n      <div><label>id: </label>{{selectedTodo.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedTodo.name\" placeholder=\"name\"/>\n      </div>\n      <div>\n        <label>Detail: </label>\n        <input [(ngModel)]=\"selectedTodo.detail\" placeholder=\"detail\">\n      </div>\n    </div>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .todos {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .todos li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .todos li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .todos li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .todos .text {\n      position: relative;\n      top: -3px;\n    }\n    .todos .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
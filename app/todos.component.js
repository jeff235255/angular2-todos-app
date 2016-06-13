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
var router_deprecated_1 = require('@angular/router-deprecated');
var todo_details_component_1 = require('./todo-details.component');
var todo_service_1 = require('./todo.service');
var TodosComponent = (function () {
    function TodosComponent(router, todoService) {
        this.router = router;
        this.todoService = todoService;
        this.title = "Todos app";
    }
    TodosComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos().then(function (todos) { return _this.todos = todos; });
    };
    TodosComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodosComponent.prototype.onSelect = function (todo) { this.selectedTodo = todo; };
    TodosComponent.prototype.gotoDetail = function () {
        this.router.navigate(['TodoDetail', { id: this.selectedTodo.id }]);
    };
    TodosComponent = __decorate([
        core_1.Component({
            selector: 'my-todos',
            templateUrl: 'app/todos.component.html',
            styleUrls: ['app/todos.component.css'],
            directives: [todo_details_component_1.TodoDetailsComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, todo_service_1.TodoService])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map
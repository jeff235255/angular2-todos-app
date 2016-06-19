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
var todo_1 = require('./todo');
var todo_service_1 = require('./todo.service');
var TodoDetailsComponent = (function () {
    function TodoDetailsComponent(todoService, routesParams) {
        this.todoService = todoService;
        this.routesParams = routesParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    TodoDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routesParams.get('id') !== null) {
            var id = this.routesParams.get('id');
            this.navigated = true;
            this.todoService.getTodo(id).then(function (todo) { return _this.todo = todo; });
        }
        else {
            this.navigated = false;
            this.todo = new todo_1.Todo();
        }
    };
    TodoDetailsComponent.prototype.save = function () {
        var _this = this;
        this.todoService
            .save(this.todo)
            .then(function (todo) {
            _this.todo = todo;
            _this.goBack(todo);
        })
            .catch(function (error) { return _this.error = error; });
    };
    TodoDetailsComponent.prototype.goBack = function (saveTodo) {
        if (saveTodo === void 0) { saveTodo = null; }
        this.close.emit(saveTodo);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todo_1.Todo)
    ], TodoDetailsComponent.prototype, "todo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoDetailsComponent.prototype, "close", void 0);
    TodoDetailsComponent = __decorate([
        core_1.Component({
            selector: 'my-todo-detail',
            templateUrl: 'app/todo-details.component.html'
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, router_deprecated_1.RouteParams])
    ], TodoDetailsComponent);
    return TodoDetailsComponent;
}());
exports.TodoDetailsComponent = TodoDetailsComponent;
//# sourceMappingURL=todo-details.component.js.map
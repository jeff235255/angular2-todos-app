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
var mock_todos_1 = require('./mock-todos');
var TodoService = (function () {
    function TodoService() {
    }
    TodoService.prototype.getTodos = function () {
        return Promise.resolve(mock_todos_1.TODOS);
    };
    TodoService.prototype.getTodosSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_todos_1.TODOS); }, 200);
        });
    };
    TodoService.prototype.getTodo = function (id) {
        return this.getTodos()
            .then(function (todos) { return todos.filter(function (todo) { return todo.id === id; })[0]; });
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map
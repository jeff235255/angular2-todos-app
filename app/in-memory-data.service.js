"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = [
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
        return { todos: todos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
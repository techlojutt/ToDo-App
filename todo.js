"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Todo {
    constructor(listOfTodos) {
        this.listOfTodos = [];
        this.listOfTodos = listOfTodos;
    }
    getTodos() {
        return this.listOfTodos;
    }
    createTodo(todo) {
        this.listOfTodos.push(todo);
    }
    updateTodo(index, todo) {
        this.listOfTodos.splice(index, 1, todo);
    }
    deleteTodo(index) {
        this.listOfTodos.splice(index, 1);
    }
    reset() {
        this.listOfTodos = [];
    }
}
const saveTodosInTextFile = (todos) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_1.promises.writeFile('todos.txt', todos);
    }
    catch (error) {
        console.error(error);
    }
});
const myTodos = new Todo(["learn React js", "Learn Angular js", "Learn Next js"]);
myTodos.getTodos();
console.log(myTodos.getTodos());
myTodos.createTodo("Learn vue js");
console.log(myTodos.getTodos());
myTodos.updateTodo(0, "learn Next js 14");
console.log(myTodos.getTodos());
myTodos.deleteTodo(0);
console.log(myTodos.getTodos());
myTodos.reset();
console.log(myTodos.getTodos());
saveTodosInTextFile(myTodos.getTodos());

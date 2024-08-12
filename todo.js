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
class Todos {
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
        const resultTodo = todos.map((value) => {
            return (value.id, value.title, value.description, value.status);
        });
        yield fs_1.promises.writeFile('todos.txt', resultTodo);
    }
    catch (error) {
        console.error(error);
    }
});
const myTodos = new Todos([{
        id: 0,
        title: 'Learn Typescript',
        description: 'Learn typescript for better understanding',
        status: 'completed'
    }, {
        id: 1,
        title: 'Learn React js',
        description: 'Learn React for front-end development',
        status: 'completed'
    }]);
myTodos.getTodos();
console.log(myTodos.getTodos());
myTodos.createTodo({
    id: 2,
    title: 'Learn Nextjs',
    description: 'Learn Nextjs for server side rendering',
    status: 'in Progress'
});
myTodos.updateTodo(0, {
    id: 1,
    title: 'Learn React',
    description: 'Learn React for front-end development',
    status: 'in Progress'
});
saveTodosInTextFile(myTodos.getTodos());

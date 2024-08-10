import {promises as fs} from 'fs' ;

interface ITodo {
    listOfTodos : string[] ;
    getTodos : () => string[];
    createTodo:(todo:string) => void ;
    updateTodo : (index:number,todo:string) => void ;
    deleteTodo : (index:number) => void ;
    reset : () => void ;
}
class Todo implements ITodo {
   public listOfTodos:string[] = [] ;
   constructor(listOfTodos:string[]){
    this.listOfTodos = listOfTodos ;
    }

    getTodos():string[]{
       return this.listOfTodos;
    }
    createTodo(todo:string):void{
       this.listOfTodos.push(todo)
    }
    updateTodo(index:number,todo:string):void{
        this.listOfTodos.splice(index,1,todo)              
    }
    deleteTodo(index:number){
       this.listOfTodos.splice(index,1)
    }
    reset(){
        this.listOfTodos = [] ;
    }
}
const saveTodosInTextFile = async (todos:string[]) : Promise<void> => {
  try {
    await fs.writeFile ('todos.txt',todos) 
  } catch (error) {
     console.error(error);
  }
}




const myTodos = new Todo(["learn React js","Learn Angular js","Learn Next js"]);
myTodos.getTodos();
console.log(myTodos.getTodos());
myTodos.createTodo("Learn vue js");
console.log(myTodos.getTodos());
myTodos.updateTodo(0,"learn Next js 14");
console.log(myTodos.getTodos());
myTodos.deleteTodo(0);
console.log(myTodos.getTodos());
myTodos.reset()
console.log(myTodos.getTodos());
saveTodosInTextFile(myTodos.getTodos());











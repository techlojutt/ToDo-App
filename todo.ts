import {promises as fs} from 'fs' ;

type Todo = {
   id: number ;
   title: string;
   description: string;
   status: 'completed' | 'in Progress'
}

interface ITodo {
    listOfTodos : Todo[] ;
    getTodos : () => Todo[];
    createTodo:(todo:Todo) => void ;
    updateTodo : (index:number,todo:Todo) => void ;
    deleteTodo : (index:number) => void ;
    reset : () => void ;
}
class Todos implements ITodo {
   public listOfTodos:Todo[] = [] ;
   constructor(listOfTodos:Todo[]){
    this.listOfTodos = listOfTodos ;
    }

    getTodos():Todo[]{
       return this.listOfTodos;
    }
    createTodo(todo:Todo):void{
       this.listOfTodos.push(todo)
    }
    updateTodo(index:number,todo:Todo):void{
        this.listOfTodos.splice(index,1,todo)              
    }
    deleteTodo(index:number){
       this.listOfTodos.splice(index,1)
    }
    reset(){ 
        this.listOfTodos = [] ;
    }
}
const saveTodosInTextFile = async (todos:Todo[]) : Promise<void> => {
  try {
   const listOfTodos = todos.map((value)=>{
        return(value.id,value.title,value.description,value.status)
    })
    await fs.writeFile ('todos.txt',listOfTodos) ;
  } catch (error) {
     console.error(error);
  }
}




const myTodos = new Todos([{
   id:0,
   title:'Learn Typescript',
   description:'Learn typescript for better understanding',
   status:'completed'

},{
   id:1,
   title:'Learn React js',
   description:'Learn React for front-end development',
   status:'completed'
}]);
myTodos.getTodos();
console.log(myTodos.getTodos());
myTodos.createTodo({
   id: 2,
   title: 'Learn Nextjs',
   description: 'Learn Nextjs for server side rendering',
   status: 'in Progress'
});
myTodos.updateTodo(0,{
   id: 1,
   title: 'Learn React',
   description: 'Learn React for front-end development',
   status: 'in Progress'
});
saveTodosInTextFile(myTodos.getTodos());











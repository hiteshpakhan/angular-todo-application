import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent {
  title = 'old-v-angular-learning';

  todos:Todo[];
  localItem: string;

  todoAdding(todo:Todo){
    console.log("we are adding ths object: ",todo);
    this.todos.push(todo);

    
    // here we will send the updated todos to localstorage here 
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  deleteTodo(todo: Todo){
    console.log("we have deleted this object: ",todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

    // or you can also do it like this
    // this.todos = this.todos.filter(t => t !== todo);

    // here we will send the updated todos to localstorage here 
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active; 
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
  }

  constructor(){
    
    setTimeout(()=>{
      this.title = "surprise surprise mf"
    }, 3000);

    this.localItem = localStorage.getItem("todos") ?? "";
    // this.localItem = localStorage.getItem("todos") as string;   //do not use it unless its its necessary //You can assert that the value will always be a string, but this might lead to issues if null is returned unexpectedly:
    
    if(this.localItem == null){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
    }

  }
}


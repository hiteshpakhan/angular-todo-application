import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  title!:string;
  desc!:string;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  
  onSubmit(){
    const todo:Todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.addTodo.emit(todo);
  }


  constructor(){}
}

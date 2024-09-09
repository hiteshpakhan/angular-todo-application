import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() checkBox: EventEmitter<Todo> = new EventEmitter<Todo>();


  onCheckboxClick(todo:Todo){
    this.checkBox.emit(todo);
    
  }

  constructor(){}
  
  onDelete(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("on click has been clicked");
  }
}

import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service'; // c 需引入 s

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService : TodoListService) { }

  ngOnInit(): void {
  }

  addTodo(inputRef : HTMLInputElement):void{    
    const todo = inputRef.value.trim(); // trim() 去除空格
    if(todo) //trim() 若沒有內容，則回傳 false
      this.todoListService.add(inputRef.value);
    inputRef.value = "";
  }
  
  getList(): string[]{
    return this.todoListService.getList();
  }

}

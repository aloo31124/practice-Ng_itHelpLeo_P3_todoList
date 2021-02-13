import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(inputRef : HTMLInputElement):void{
    console.log(inputRef) //$event.target => HTMLInputElement 是將整個 input 元素丟入
    console.log(inputRef.value); // 從 input 元素中取出輸入的 value
    inputRef.value = '';    
  }

}

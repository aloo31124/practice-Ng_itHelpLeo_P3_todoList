import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private list : Todo[] = [];

  constructor() { }
  
  add(title:string):void{
    if(title || title.trim() )
      this.list.push(new Todo(title));
  }

  getList() : Todo[]{
    return this.list;
  }
}

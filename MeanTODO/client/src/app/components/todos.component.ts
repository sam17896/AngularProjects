import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import 'rxjs/add/operator/map'; 


@Component({
  moduleId : module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html',
})
export class TodosComponent implements OnInit {
    todos: Todo[];
    constructor(private todoService: TodoService){

    }

    ngOnInit(){
        this.todos = [];
        this.todoService.getTodos()
        .map(res => res.json())
        .subscribe(todos => this.todos = todos)

    }
  
}

interface Todo{
    text : string,
    isCompleted : boolean
}

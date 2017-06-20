import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import 'rxjs/add/operator/map'; 


@Component({
  moduleId : module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html',
})
export class TodosComponent implements OnInit {
    private todos: Todo[];
    constructor(private todoService: TodoService){

    }

    ngOnInit(){
        this.todos = [];
        this.todoService.getTodos()
        .map(res => res.json())
        .subscribe(todos => this.todos = todos)

    }

    addTodo($event, todoText){
        console.log(todoText.value);
        if($event.which == 1){
            var result;
            var newTodo = {
                text : todoText.value,
                isCompleted : false
            }
        }

        result = this.todoService.saveTodo(newTodo);

        result.subscribe(x => {
            this.todos.push(newTodo);
            todoText.value = "";
        })
    }
  
}

interface Todo{
    text : string,
    isCompleted : boolean
}

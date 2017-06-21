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
                isCompleted : false,
                isEditMode : false
            }
        }

        result = this.todoService.saveTodo(newTodo);

        result.subscribe(x => {
            this.todos.push(newTodo);
            todoText.value = "";
        })
    }


    updateTodo(todo){
        console.log("Update");
        var newTodo = {
            _id : todo._id,
            text : todo.text,
            isCompleted : !todo.isCompleted,
            isEditMode : todo.isEditMode
        };

        this.todoService.updateTodo(newTodo)
            .map(res => res.json())
            .subscribe(data => {
                todo.isCompleted = !todo.isCompleted;
            });
    }


    setEditState(todo, state){
        if(state){
            todo.isEditMode = state;
        } else {
            delete todo.isEditMode;
        }
    }

    EditTodo($event,todo){
        if($event.which == 13){
            todo.text = $event.target.value;
            var newTodo = {
                _id : todo._id,
                text : todo.text,
                isCompleted : todo.isCompleted,
                isEditMode : false
            };

            this.todoService.updateTodo(newTodo)
                .map(res => res.json())
                .subscribe(data => {
                    this.setEditState(todo, false);
                });
        }
    }

  
}

interface Todo{
    text : string,
    isCompleted : boolean,
    isEditMode : boolean
}

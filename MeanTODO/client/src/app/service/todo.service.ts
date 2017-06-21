import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Headers} from '@angular/http'

import 'rxjs/add/operator/map'

@Injectable()
export class TodoService{

    url :string;

    constructor(public http:Http){
        this.url = 'http://localhost:3000/';
    }

    getTodos(){
        return this.http.get(this.url + 'api/v1/todos');
    }

    saveTodo(todo){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + 'api/v1/todo', JSON.stringify(todo),{headers: headers})
            .map(res => res.json());
    }

    updateTodo(todo){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.url + 'api/v1/todo/' + todo._id, JSON.stringify(todo),{headers: headers});
    }

}
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class TodoService{

    constructor(public http:Http){

    }

    getTodos(){
        return this.http.get('http://localhost:3000/api/v1/todos');
    }

}
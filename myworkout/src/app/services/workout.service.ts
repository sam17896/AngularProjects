import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService {
    
    apiKey : string;
    baseUrl : string;

    constructor(private http:Http){
        this.apiKey = 'wwG0trWWeBAu8t19P3g4vNEbdZH1vLGy';
        this.baseUrl = 'https://api.mlab.com/api/1/databases/myworkoutapp/collections/workouts';

    }

    getWorkout(){
        return this.http.get(this.baseUrl + "?apiKey=" + this.apiKey)
            .map(res => res.json());
    }

    addWorkout(workout){

        var header = new Headers();
        header.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl+"?apiKey="+this.apiKey, JSON.stringify(workout),{headers:header})
            .map(res => res.json());

    }
}

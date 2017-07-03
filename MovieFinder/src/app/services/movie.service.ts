import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class MovieService{
    apiKey : String;

    constructor(private jsonp : Jsonp){
        this.apiKey = '1c22bbd28408d30aa548e523b4b6edd3';
        console.log('Service Initilized...');
    }

    getPopular(){
        return this.jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=1c22bbd28408d30aa548e523b4b6edd3')
            .map(res => res.json());
    }
}
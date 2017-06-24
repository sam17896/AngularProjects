import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    
    apiKey :string;
    baseUrl : string;
    constructor(private http:Http){
        this.apiKey = 'f79e91d259637b65';
        this.baseUrl = 'http://api.wunderground.com/api/f79e91d259637b65/conditions/q';    
    }

    getWeather(city, state){
        return this.http.get(this.baseUrl + '/' +state + '/'+ city +'.json')
            .map(res => res.json());
    }
}
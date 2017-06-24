import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    
    apiKey :string;
    baseUrl : string;
    searchUrl : string;

    constructor(private http:Http){
        this.apiKey = 'f79e91d259637b65';
        this.baseUrl = '/api/'+this.apiKey+"/conditions/q";    
        this.searchUrl = '/search/aq?query=';
    }

    getWeather(zmw){
        return this.http.get(this.baseUrl + "/zmw:"+ zmw +".json")
            .map(res => res.json());
    }

    searchCities(query){
        return this.http.get(this.searchUrl + query)
            .map(res => res.json());
    }
}
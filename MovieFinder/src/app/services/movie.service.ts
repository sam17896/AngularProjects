import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class MovieService{
    apiKey : String;
    today : any;
    dd : any;
    mm : any;
    yyyy : any;
    sdate : any;
    smm : any;

    constructor(private jsonp : Jsonp){
        this.apiKey = '1c22bbd28408d30aa548e523b4b6edd3';
        console.log('Service Initilized...');
    }

    getPopular(){
        return this.jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=1c22bbd28408d30aa548e523b4b6edd3')
            .map(res => res.json());
    }

    getMoviesInTheater(){
        this.today = new Date();
        this.dd = this.today.getDate();
        this.mm = this.today.getMonth()+1; //January is 0!
        this.yyyy = this.today.getFullYear();


        if(this.dd<10) {
            this.dd = '0' + this.dd
        } 

        if(this.mm<10) {
            this.mm = '0' + this.mm
        } 

        if (this.mm == '01'){
            this.sdate = "12" + '-' + this.dd + '-' + this.yyyy
        } else {
            this.smm = parseInt(this.mm) - 1;
            if(this.smm<10){
                this.smm = '0' + this.smm
            }
            this.sdate = this.yyyy + "-" + this.smm + '-' + this.dd
        }


        this.today = this.yyyy + "-" + this.mm + '-' + this.dd;

        console.log(this.today)
        console.log(this.sdate)
        var url :string =  'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte='+this.sdate+'&primary_release_date.lte='+this.today+'&sort_by=popularity.desc&api_key=1c22bbd28408d30aa548e523b4b6edd3'
        console.log(url) 
        return this.jsonp.get(url)
                .map(res => res.json());
    }

    searchMovies(searchStr : string){
        return this.jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key=1c22bbd28408d30aa548e523b4b6edd3')
            .map(res => res.json());
        
    }
}
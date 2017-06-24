import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from '../../app/services/weather.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  weatherObj : any;
  searchStr : string;
  results : any;
  zmw : any;


  constructor(public navCtrl: NavController, private weather:WeatherService) {
    console.log('service ready');
  }

  ngOnInit(){
    this.getDefaultValue();
    this.weather.getWeather(this.zmw)
      .subscribe(data => {
        this.weatherObj = data.current_observation;
        console.log(this.weatherObj);
      });
  }

  getQuery(){
    this.weather.searchCities(this.searchStr)
      .subscribe(data => {
        this.results = data.RESULTS;
        console.log(this.results);
      });
  }

  choseCity(city){
    this.results = [];
    this.weather.getWeather(city.zmw)
      .subscribe(data => {
        this.weatherObj = data.current_observation;
        console.log(this.weatherObj);
      });
  }

  getDefaultValue(){
    this.zmw = "02101.1.99999";
  }



}

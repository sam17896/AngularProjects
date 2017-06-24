import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from '../../app/services/weather.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  city = 'Boston';
  state = 'MA';

  weatherObj : any;
  searchStr : string;
  results : any;


  constructor(public navCtrl: NavController, private weather:WeatherService) {
    console.log('service ready');
  }

  ngOnInit(){
    this.weather.getWeather(this.city,this.state)
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



}

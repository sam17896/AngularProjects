import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherService } from '../../app/services/weather.service';
import { HomePage } from '../../pages/home/home';
@Component({
  templateUrl: 'setting.html'
})
export class SettingPage implements OnInit {

  defaultCity : any;
  searchStr:  any;
  results : any;

  constructor(public navCtrl: NavController, private service:WeatherService) {
    this.results = [];
  }

  ngOnInit(){
      this.getDefault();
  }

  getQuery(){
    this.service.searchCities(this.searchStr)
      .subscribe(data =>{
        this.results = data.RESULTS;
      })
  }

  getDefault(){
    if(localStorage.city !== undefined){
      this.defaultCity = JSON.parse(localStorage.city).name;
    } else {
      this.defaultCity = '';
    }
  }

  setDefaultCity(city){
    this.results = [];
    if(typeof(Storage) !== "undefined"){
      localStorage.city = JSON.stringify(city);
      this.searchStr = city.name;
      this.getDefault();
    } else {
      console.log("Storage Not Available");
    }
  }

  saveChanges(){
    this.navCtrl.setRoot(HomePage);
  }

}

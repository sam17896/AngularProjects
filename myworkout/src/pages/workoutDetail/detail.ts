import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'detail.html'
})
export class DetailPage {

  workout : any;
  constructor(public navCtrl: NavController, private params: NavParams) {
    this.workout = params.get('workout');
    }

}

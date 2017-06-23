import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddPage} from '../add/add';
import {AboutPage} from '../about/about';
import {WorkoutPage} from '../workouts/workouts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root : any;
  tab2Root : any;
  tab3Root : any;

  constructor(public navCtrl: NavController) {
    this.tab1Root = WorkoutPage;
    this.tab2Root = AddPage;
    this.tab3Root = AboutPage;
  }

}

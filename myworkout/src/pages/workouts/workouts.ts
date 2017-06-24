import { Component ,OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {DetailPage} from '../workoutDetail/detail';


@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutPage implements OnInit {

  workouts : any;

  constructor(public navCtrl: NavController, private workout:WorkoutService, private params:NavParams) {
      console.log('Service Ready');
  }

  ngOnInit(){
    console.log('no error');
    this.workout.getWorkout().subscribe(workout => {
        this.workouts = workout;
    });
  }

  workoutSelected(event, workout){
    this.navCtrl.push(DetailPage, {
      workout : workout
    });
  }

}

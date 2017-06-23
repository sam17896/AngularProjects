import { Component ,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';

@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutPage implements OnInit {

  constructor(public navCtrl: NavController, private workout:WorkoutService) {
      console.log('Service Ready');
  }

  ngOnInit(){
    console.log('no error');
    this.workout.getWorkout().subscribe(workout => {
        console.log(workout);
    });
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutPage} from '../workouts/workouts';

@Component({
  selector: 'add',
  templateUrl: 'add.html'
})
export class AddPage {

  title : any;
  note :  any;
  type :  any;
  result : any;

  constructor(public navCtrl: NavController, private workoutService : WorkoutService) {

  }

  onSubmit(){
    var newWorkout = {
      title : this.title,
      note : this.note,
      type : this.type
    }

    this.workoutService.addWorkout(newWorkout)
      .subscribe(res => {this.result = res}, 
      err=>console.log(err), 
      ()=>console.log('Workout Added'));

      this.navCtrl.setRoot(WorkoutPage)
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutPage} from '../workouts/workouts';

@Component({
  templateUrl: 'detail.html'
})
export class DetailPage {

    workout : any;
    result : any;

    constructor(public navCtrl: NavController, private params: NavParams,private workoutservice: WorkoutService) {
        this.workout = params.get('workout');
    }

    deleteWorkout(id){
        this.workoutservice.deleteWorkout(id)
            .subscribe(res => {this.result = res}, 
            err=>console.log(err), 
            ()=>console.log('Workout Deleted'));

        this.navCtrl.setRoot(WorkoutPage)
    }

}

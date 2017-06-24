import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPage } from '../pages/add/add';
import { AboutPage } from '../pages/about/about';
import { WorkoutPage } from '../pages/workouts/workouts';
import { DetailPage } from '../pages/workoutDetail/detail';
import {WorkoutService} from './services/workout.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    AboutPage,
    WorkoutPage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    AboutPage,
    WorkoutPage,
    DetailPage
  ],
  providers: [
    WorkoutService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

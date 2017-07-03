import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LogsComponent } from './components/logs/log';
import { FeathersService } from './services/feather.service';


@NgModule({
  declarations: [
    AppComponent, LogsComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [FeathersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

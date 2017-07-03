import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LogsComponent } from './components/logs/log';
import { FeathersService } from './services/feather.service';


@NgModule({
  declarations: [
    AppComponent, LogsComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [FeathersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

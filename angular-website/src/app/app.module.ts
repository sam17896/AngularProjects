import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component'
import {JumbotronComponent} from './components/jumborton/jumborton.component'

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, JumbotronComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

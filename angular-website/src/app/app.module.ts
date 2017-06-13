import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component'
import {JumbotronComponent} from './components/jumborton/jumborton.component'
import {HomeComponent} from './components/pages/home.component'
import {AboutComponent} from './components/pages/about.component'
import {routing} from './app.router'

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, JumbotronComponent,
    HomeComponent, AboutComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

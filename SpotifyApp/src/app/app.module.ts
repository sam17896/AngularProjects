import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { AboutComponent } from './components/pages/about.component';
import {HomeComponent} from './components/pages/home.component';

import {routing} from './app.routers';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent,HomeComponent, AboutComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

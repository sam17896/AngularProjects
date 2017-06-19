import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos.component';
import { NavbarComponent } from './components/navbar.component';

@NgModule({
  declarations: [
    AppComponent, TodosComponent, NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

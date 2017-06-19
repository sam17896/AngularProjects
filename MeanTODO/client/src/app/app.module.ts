import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos.component';
import { NavbarComponent } from './components/navbar.component';
import { TodoService } from './service/todo.service';

@NgModule({
  declarations: [
    AppComponent, TodosComponent, NavbarComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

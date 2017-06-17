import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {GithubService} from './service/github.service';



import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile.component'; 
import { NavbarComponent } from './component/navbar.component';

@NgModule({
  declarations: [
    AppComponent, ProfileComponent, NavbarComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { MoviesComponent} from './component/movies/movies.component';
import { MovieComponent} from './component/movie/movie.component';

import {MovieService} from './services/movie.service';
import {routing} from './app.router';

@NgModule({
  declarations: [
    AppComponent, MoviesComponent, MovieComponent
  ],
  imports: [
    BrowserModule,JsonpModule, FormsModule, routing
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

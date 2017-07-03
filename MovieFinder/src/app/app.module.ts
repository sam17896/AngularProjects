import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { MoviesComponent} from './component/movies/movies.component';
import {MovieService} from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent, MoviesComponent
  ],
  imports: [
    BrowserModule,JsonpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent {

  popularList : Array<Object>
  theaterList : Array<Object>
  searchStr : string;
  searchRes : Array<Object>

  constructor(private service : MovieService){
    this.service.getPopular().subscribe(res => {
      this.popularList = res.results;
    });

     this.service.getMoviesInTheater().subscribe(res => {
      this.theaterList = res.results;
    });
  }

  searchMovies(){
    this.service.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
      console.log(this.searchRes);
    });
  }

}

import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent {

  popularList : Array<Object>

  constructor(private service : MovieService){
    this.service.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
  }

}

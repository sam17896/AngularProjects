import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent {

    constructor(private service: MovieService){

    }
}

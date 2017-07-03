import { Component, OnInit} from '@angular/core';
import { MovieService } from '../../services/movie.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent {


    movie : Object;

    constructor(private service: MovieService, private router:ActivatedRoute){

    }

    ngOnInit(){
        this.router.params.subscribe((params) => {
            let id = params['movieId'];
            this.service.getMovie(id).subscribe(res => {
                this.movie = res;
            });
        });
    }
}

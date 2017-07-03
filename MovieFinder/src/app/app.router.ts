import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {MoviesComponent} from './component/movies/movies.component';
import {MovieComponent} from './component/movie/movie.component';


const appRoutes : Routes = [
    {
        path : '',
        component: MoviesComponent
    },
    {
        path : 'movie/:movieId',
        component: MovieComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

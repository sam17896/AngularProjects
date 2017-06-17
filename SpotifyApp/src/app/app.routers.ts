import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {ArtistComponent} from './components/pages/artist.component';
import {AlbumComponent} from './components/pages/album.component';

const appRoutes : Routes = [
    {
        path : '',
        component: HomeComponent
    },
    {
        path : 'about',
        component: AboutComponent
    },
    {
        path : 'artist/:id',
        component : ArtistComponent
    },
    {
        path : 'album/:id',
        component : AlbumComponent
    }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { SpotifyService } from './service/spotify.service';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { AboutComponent } from './components/pages/about.component';
import { HomeComponent } from './components/pages/home.component';
import { ArtistComponent } from './components/pages/artist.component';
import { AlbumComponent } from './components/pages/album.component';

import {routing} from './app.routers';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent,HomeComponent, AboutComponent,
    ArtistComponent, AlbumComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

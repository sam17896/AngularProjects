import { Component } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  moduleId : module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  private searchStr: string;

  constructor(private spotify: SpotifyService){

  }

  searchMusic(){
    this.spotify.searchMusic(this.searchStr)
      .subscribe (res =>{
        console.log(res.artists.items);
      })
  }
}

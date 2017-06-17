import { Component } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  moduleId : module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  private searchStr: string;
  private result:Artist[];

  constructor(private spotify: SpotifyService){

  }

  searchMusic(){
    if(this.searchStr.length>0){
      this.spotify.searchMusic(this.searchStr)
      .subscribe (res =>{
        this.result = res.artists.items;
      })
    }
    
  }
}


interface Artist{
  id: number;
  name: string;
  genres: any;
  albums: Album[];
}

interface Album{
  id: number;
}
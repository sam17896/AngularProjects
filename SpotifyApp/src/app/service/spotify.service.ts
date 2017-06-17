import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
  private searchUrl: string;
  private artistUrl: string;
  private albumUrl: string;
  private singleAlbumUrl : string;
  
  private client_id = 'bab551c7f45f41b8a3a506f72ec4e36d';
  private client_secret = '9963acf865f54633890da7e255cb8a1d';
  private access_token = 'BQDl4iJq3l-AGG5AKxqUEoPpytsMS59MnBbIDPzfh0JHqTtXIMuuArbNkAXH4eKK3Ls3KykggqqTjkLgMcMB9JOObSNBIRINwdjf8E0uqs0Fav4lWP_JONNjdUEfFuJja0HgjBaA1zOaJP4kP540p1heHtRQU-RRbB0ES9FnPd5fknnjJh4';

  constructor(private http : Http){
    console.log("Service Ready..");
  }

  searchMusic(str: string, type="artist"){
      this.searchUrl = "https://api.spotify.com/v1/search?query="+str+"&offset=0&limit=20&type="+type+"&market=US&access_token="+this.access_token;
      return this.http.get(this.searchUrl)
        .map(res =>res.json());

  }

  getArtist(id: string){
      this.artistUrl = "https://api.spotify.com/v1/artists/"+id+"?access_token="+this.access_token;
      return this.http.get(this.artistUrl)
        .map(res =>res.json());

  }

  getAlbums(id: string){
      this.albumUrl = "https://api.spotify.com/v1/artists/"+id+"/albums?access_token="+this.access_token;
      return this.http.get(this.albumUrl)
        .map(res =>res.json());

  }

  getAlbum(id: string){
      this.singleAlbumUrl = "https://api.spotify.com/v1/albums/"+id+"?access_token="+this.access_token;
      return this.http.get(this.singleAlbumUrl)
        .map(res =>res.json());

  }


}
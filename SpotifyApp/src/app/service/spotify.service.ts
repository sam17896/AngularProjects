import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
  private searchUrl: string;
  private artistUrl: string;
  private albumUrl: string;
  
  private client_id = 'bab551c7f45f41b8a3a506f72ec4e36d';
  private client_secret = '9963acf865f54633890da7e255cb8a1d';
  private access_token = 'BQCz1ukVWPjiJF5JdB1acarK5h3hpbieGWrjTnNZVRE_m5_0NiUZZFvN0uLwgFwNdiyCdPd3wLYERaVrAjDo1ibKrQzetsngClyRNzIJF5ESKBJ-ix928P3HTM1AREB-EUtaR0WusiADq00ymzMakkzQjKKclfN3QS0QHEMpxEiuiEBAU7c';

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


}
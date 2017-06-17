import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
  private searchUrl: string;
  private client_id = 'bab551c7f45f41b8a3a506f72ec4e36d';
  private client_secret = '9963acf865f54633890da7e255cb8a1d';
  private access_token = 'BQCG4QwyjINnHzFbeYnrViEZMu6y6jyH9lsPqM1g5NGJ2-tzXdVDIlXrxXRtcSVo9Kx2DAMzPLdx70qJRKojOERwdDuceSA90bCsT7AqeMAX7uMqKYf689hNXdjW3IgATaZaqFJk7Fib7uZQ6OLZJftP-iP-W8DSeD8lMEjlVJAuOL2yvOA';

  constructor(private http : Http){
    console.log("Service Ready..");
  }

  searchMusic(str: string, type="artist"){
      this.searchUrl = "https://api.spotify.com/v1/search?query="+str+"&offset=0&limit=20&type="+type+"&market=US&access_token="+this.access_token;
      return this.http.get(this.searchUrl)
        .map(res =>res.json());

  }

}
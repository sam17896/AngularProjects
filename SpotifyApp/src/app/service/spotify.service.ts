import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{

  constructor(private http : Http){
    console.log("Service Ready..");
  }

}
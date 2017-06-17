import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;

  private client_id = "c45e7e64bf9f3ce4b40a";
  private client_secret = "6be39cf955ba90575102ac71d629b2061733f0ea";

  constructor(private http : Http){
    console.log("Service Ready..");
    this.username = 'sam17896';
  }

  getUser(){
      return this.http.get("http://api.github.com/users/" + this.username+'?client_id='+this.client_id+"&client_secret="+this.client_secret)
                    .map(res => res.json());
                    
  }

  getRepos(){
      return this.http.get("http://api.github.com/users/" + this.username + "/repos" +'?client_id='+this.client_id+"&client_secret="+this.client_secret)
                    .map(res => res.json());
                    
  }

  updateUser(username:string){
    this.username = username;
  }


}
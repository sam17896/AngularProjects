import { Component } from '@angular/core';
import {GithubService} from '../service/github.service';
import 'rxjs/add/operator/map';

@Component({
  moduleId : module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent {
    private user: any;
    private repos: any[];
    private username: string;

    constructor(private github : GithubService){
       
       this.user = false;
    }

    searchUser(){
       // console.log(this.username);
        this.github.updateUser(this.username);


        this.github.getUser().subscribe(user =>{
       //     console.log(user);
           this.user = user;
        });

        this.github.getRepos().subscribe(repos =>{
        //    console.log(repos);
           this.repos = repos;
        });
    }

}

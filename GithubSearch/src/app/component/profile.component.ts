import { Component } from '@angular/core';
import {GithubService} from '../service/github.service';
import 'rxjs/add/operator/map';

@Component({
  moduleId : module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent {
    private user: any[];
    private repos: any[];

    constructor(private github : GithubService){
       
        this.github.getUser().subscribe(user =>{
            console.log(user);
           this.user = user;
        });

        this.github.getRepos().subscribe(repos =>{
            console.log(repos);
           this.repos = repos;
        });
    }

}

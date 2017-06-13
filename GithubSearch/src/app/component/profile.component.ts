import { Component } from '@angular/core';
import {GithubService} from '../service/github.service';
import 'rxjs/add/operator/map';

@Component({
  moduleId : module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent {
    constructor(private github : GithubService){
        this.github.getUser().subscribe(user =>{
            console.log(user);
        })
    }

}

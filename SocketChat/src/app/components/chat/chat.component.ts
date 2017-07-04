import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';

import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.html',
})
export class ChatComponent implements OnInit, OnDestroy {

    messages : any = [];
    message : string;
    connection : any;
    username : string;
    alert : any = false;

    constructor(private service : ChatService){

    }

    ngOnInit(){
        this.username = this.service.getUsername();
        
        this.connection = this.service.getMessages().subscribe(
            message => {
                console.log(message);
                this.messages.push(message);
            }
        );

    }

    ngOnDestroy(){
        this.connection.unsubscribe();
    }

    sendMessage(){
        //console.log(this.message);
        this.service.sendMessage(this.message, this.username);
        this.message = "";
    }

    setUsername(){
        this.service.setUsername(this.username);
        this.alert = "Username is Set";
    }
}

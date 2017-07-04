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


    constructor(private service : ChatService){

    }

    ngOnInit(){
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
        this.service.sendMessage(this.message);
        this.message = "";
    }
}

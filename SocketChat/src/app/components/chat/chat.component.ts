import { Component } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.html',
})
export class ChatComponent {

    messages : any = []
    message : string

    constructor(){

    }

    sendMessage(){
        console.log(this.message);
    }
}

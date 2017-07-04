import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import {ChatService} from './services/chat.service';


@NgModule({
  declarations: [
    AppComponent, ChatComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

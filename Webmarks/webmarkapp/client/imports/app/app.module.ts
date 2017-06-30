import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { MyApp } from './app.component';
import { BookmarkList } from './bookmarklist/bookmarklist';
import {Bookmarks} from '../../collections/bookmarks';
import {Mongo} from 'meteor/mongo';

@NgModule({
  declarations: [
    MyApp, BookmarkList
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [MyApp]
})
export class AppModule { }
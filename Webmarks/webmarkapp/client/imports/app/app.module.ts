import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule, FormBuilder, Validator,ReactiveFormsModule }   from '@angular/forms';

import { Mongo } from 'meteor/mongo';
import { MyApp } from './app.component';
import { BookmarkList } from './bookmarklist/bookmarklist';
import { BookmarkForm } from './bookmark-form/bookmark-form';
import { BookmarkDetail } from './detail/detail';
import {routing} from './app.router'

@NgModule({
  declarations: [
    MyApp, BookmarkList, BookmarkForm, BookmarkDetail
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, routing
  ],
  providers: [BookmarkList],
  bootstrap: [MyApp]
})
export class AppModule { }
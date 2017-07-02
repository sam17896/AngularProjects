import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule, FormBuilder, Validator,ReactiveFormsModule }   from '@angular/forms';

import { MyApp } from './app.component';
import { BookmarkList } from './bookmarklist/bookmarklist';
import { BookmarkForm } from './bookmark-form/bookmark-form';


@NgModule({
  declarations: [
    MyApp, BookmarkList, BookmarkForm
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MyApp]
})
export class AppModule { }
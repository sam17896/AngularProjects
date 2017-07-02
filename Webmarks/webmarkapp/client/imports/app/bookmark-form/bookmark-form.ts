import {Mongo} from 'meteor/mongo';
import Bookmarks from '../../../../collections/bookmarks';
import { Component } from '@angular/core';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import template from './bookmark-form.html';


@Component({
  selector: 'bookmark-form',
  template: template
})
export class BookmarkForm {

    bookmarkForm : any;
  
    constructor(){
        let fb = new FormBuilder();

        this.bookmarkForm = fb.group({
            title : ['', Validators.required],
            url : ['', Validators.required],
            category : ['', Validators.required],
            
        })
    }

    addBookmark(event){
        event.preventDefualt();
        if(this.bookmarkForm.valid){
            var bookmark = this.bookmarkForm.value;
            console.log(bookmark);
            Bookmarks.insert({
                title : bookmark.title,
                url : bookmark.url,
                category : bookmark.category
            });

            this.bookmarkForm.constrols['title'].updateValue('');
            this.bookmarkForm.constrols['url'].updateValue('');
            this.bookmarkForm.constrols['category'].updateValue('');
            alert("insertedd");

        }
}
}
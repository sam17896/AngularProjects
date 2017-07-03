import {Mongo} from 'meteor/mongo';
import Bookmarks from '../../../../collections/bookmarks';
import { Component } from '@angular/core';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import {BookmarkList} from '../bookmarklist/bookmarklist';
import template from './bookmark-form.html';


@Component({
  selector: 'bookmark-form',
  template: template
})
export class BookmarkForm {

    bookmarkForm : any;
    
    constructor(private list : BookmarkList){
        let fb = new FormBuilder();

        this.bookmarkForm = fb.group({
            title : ['', Validators.required],
            url : ['', Validators.required],
            category : ['', Validators.required],
            
        })
    }

    addBookmark(event){
        event.preventDefault();
        if(this.bookmarkForm.valid){
            var bookmark = this.bookmarkForm.value;
            console.log(bookmark);
            this.list.addBookmark(bookmark);
        }
}
}
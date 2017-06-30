import { Component } from '@angular/core';
import template from './bookmarklist.html';
import {Bookmarks} from '../../../../collections/bookmarks';
import {Mongo} from 'meteor/mongo';


@Component({
  selector: 'bookmark-list',
  template: template
})
export class BookmarkList {

    bookmarks : Mongo.Cursor<Object>;
    
    constructor(){
              this.bookmarks = Bookmarks.find({});
        }

    
    

}
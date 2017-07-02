import {Mongo} from 'meteor/mongo';
import Bookmarks from '../../../../collections/bookmarks';
import { Component } from '@angular/core';
import template from './bookmarklist.html';


@Component({
  selector: 'bookmark-list',
  template: template
})
export class BookmarkList {

    bookmarks : Mongo.Cursor<Object>;
    
    constructor(){
              this.bookmarks = Bookmarks.find().fetch();
        }

    
    

}
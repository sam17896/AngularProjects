import {Mongo} from 'meteor/mongo';
import Bookmarks from '../../../../collections/bookmarks';
import { Component } from '@angular/core';
import template from './bookmarklist.html';


@Component({
  selector: 'bookmark-list',
  template: template
})
export class BookmarkList {

    bookmarks : Array<Object>;
    
    constructor(){
            console.log(Bookmarks.find().fetch());
            this.bookmarks = Bookmarks.find().fetch();
    }

    removeBookmark(bookmark){
        Bookmarks.remove(bookmark._id);
    }

    addBookmark(bookmark){
      Bookmarks.insert({
                title : bookmark.title,
                url : bookmark.url,
                category : bookmark.category
            });
    
      //this.bookmarks = Bookmarks.find().fetch(); 
      this.bookmarks.push(bookmark);     
      console.log(this.bookmarks);
    }

    
    

}
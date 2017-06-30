import 'zone.js';
import 'reflect-metadata';
 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Meteor } from 'meteor/meteor';
import { AppModule } from './imports/app/app.module';
import {Bookmarks} from '../collections/bookmarks';

Meteor.startup(() => {
  console.log('client started');
  platformBrowserDynamic().bootstrapModule(AppModule);
});
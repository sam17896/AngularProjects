import {Mongo} from 'meteor/mongo';
const Bookmarks = new Mongo.Collection('bookmarks');
export default Bookmarks
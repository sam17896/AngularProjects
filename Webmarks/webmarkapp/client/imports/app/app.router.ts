import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {BookmarkList} from './bookmarklist/bookmarklist';
import {BookmarkDetail} from './detail/detail';


const appRoutes : Routes = [
    {
        path : '',
        component: BookmarkList
    },
    {
        path : 'bookmark/:bookmarkId',
        component: BookmarkDetail
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

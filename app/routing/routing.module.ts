import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from "../movie-list/movie-list.component";
//import { MainPageComponent } from '../main-page/main-page.component';
import { ScreeningListComponent } from '../screening-list/screening-list.component';
import { RoomListComponent } from '../room-list/room-list.component';
import { ChairListComponent } from '../chair-list/chair-list.component';
import { MovieEditComponent } from '../movie-edit/movie-edit.component';
import { ChairEditComponent } from '../chair-edit/chair-edit.component';
import { RoomEditComponent } from '../room-edit/room-edit.component';
import { ScreeningEditComponent } from '../screening-edit/screening-edit.component';
const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'screenings',
    component: ScreeningListComponent
  },
  {
    path: 'rooms',
    component: RoomListComponent
  },
  {
    path: 'chairs',
    component: ChairListComponent
  },
  {
    path: 'movies/:id/edit',
    component: MovieEditComponent
  },
  {
    path: 'chairs/:id/edit',
    component: ChairEditComponent
  },
  {
    path: 'rooms/:id/edit',
    component: RoomEditComponent
  },
  {
    path: 'screenings/:id/edit',
    component: ScreeningEditComponent
  }
  // {
  //   path: 'issues/new',
  //   component: IssueFormComponent
  // },
  // {
  //   path: 'issues/:id',
  //   component: IssueDetailComponent
  // },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
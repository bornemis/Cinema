import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from "../movie-list/movie-list.component";
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { ScreeningListComponent } from '../screening-list/screening-list.component';
import { ScreeningDetailComponent } from '../screening-detail/screening-detail.component';
import { RoomListComponent } from '../room-list/room-list.component';
import { RoomDetailComponent } from '../room-detail/room-detail.component';
import { ChairListComponent } from '../chair-list/chair-list.component';
import { ChairDetailComponent } from '../chair-detail/chair-detail.component';
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
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  {
    path: 'screenings/:id',
    component: ScreeningDetailComponent
  },
  {
    path: 'chairs/:id',
    component: ChairDetailComponent
  },
  {
    path: 'rooms/:id',
    component: RoomDetailComponent
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
  },
  {
    path: 'movies/add',
    component: MovieEditComponent
  },
  {
    path: 'screenings/add',
    component: ScreeningEditComponent
  },
  {
    path: 'rooms/add',
    component: RoomEditComponent
  },
  {
    path: 'chairs/add',
    component: ChairEditComponent
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
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from "../movie-list/movie-list.component";
import { MainPageComponent } from '../main-page/main-page.component';
import { ScreeningListComponent } from '../screening-list/screening-list.component';
import { RoomListComponent } from '../room-list/room-list.component';
import { ChairListComponent } from '../chair-list/chair-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
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
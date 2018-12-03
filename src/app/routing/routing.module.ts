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
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../login/login.component';
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
    component: RoomListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'chairs',
    component: ChairListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies/:id/edit',
    component: MovieEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  {
    path: 'screenings/:id',
    component: ScreeningDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chairs/:id',
    component: ChairDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rooms/:id',
    component: RoomDetailComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'chairs/:id/edit',
    component: ChairEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'rooms/:id/edit',
    component: RoomEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'screenings/:id/edit',
    component: ScreeningEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'movies/add',
    component: MovieEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'screenings/add',
    component: ScreeningEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'rooms/add',
    component: RoomEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'chairs/add',
    component: ChairEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
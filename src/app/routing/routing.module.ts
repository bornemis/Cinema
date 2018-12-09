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
import {RegisterComponent} from '../register/register.component'
const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'GUEST', 'USER']
    }
  },
  {
    path: 'movies',
    component: MovieListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'GUEST', 'USER']
    }
  },
  {
    
    path: 'movies/add',
    component: MovieEditComponent,
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
    path: 'movies/:id/chairs',
    component: ChairListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'USER']
    }
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'GUEST', 'USER']
    }
  },
  {
    path: 'movies/:id/screenings',
    component: ScreeningListComponent,
    canActivate:[AuthGuard],
    data:{
      roles: ['GUEST', 'ADMIN', 'USER']
    }
  },
  {
    path: 'movies/:id/screenings/add',
    component: ScreeningEditComponent,
    canActivate:[AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'screenings',
    component: ScreeningListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'GUEST', 'USER']
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
    path: 'screenings/:id',
    component: ScreeningDetailComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['GUEST', 'ADMIN', 'USER']
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
    path: 'screenings/:id/chairs',
    component: ChairListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'USER']
    }  
  },
  {
    path: 'screenings/:id/rooms',
    component: RoomListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }  
  },
  {
    path: 'screenings/:id/chairs/add',
    component: ChairEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'USER']
    }  
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
    path: 'rooms/add',
    component: RoomEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
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
    path: 'rooms/:id/edit',
    component: RoomEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'rooms/:id/chairs',
    component: ChairListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'rooms/:id/screenings',
    component: ScreeningListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'rooms/:id/screenings/add',
    component: ScreeningEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'chairs',
    component: ChairListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'USER']
    }
  },
 
 /* {
    path: 'chairs/add',
    component: ChairEditComponent,
    canActivate: [AuthGuard]
  },*/
  
  {
    path: 'chairs/:id',
    component: ChairDetailComponent,
    canActivate: [AuthGuard]
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
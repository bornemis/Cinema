import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule, 
  MatButtonModule, 
  MatIconModule,
  MatListModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { RoutingModule } from './routing/routing.module';
import { MovieStatusFilterComponent } from './movie-status-filter/movie-status-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ScreeningListComponent } from './screening-list/screening-list.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ChairListComponent } from './chair-list/chair-list.component';
import { ChairStatusFilterComponent } from './chair-status-filter/chair-status-filter.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { ChairFormComponent } from './chair-form/chair-form.component';
import { ChairEditComponent } from './chair-edit/chair-edit.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { ScreeningFormComponent } from './screening-form/screening-form.component';
import { ScreeningEditComponent } from './screening-edit/screening-edit.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { ChairDetailComponent } from './chair-detail/chair-detail.component';
import { ScreeningDetailComponent } from './screening-detail/screening-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieStatusFilterComponent,
    MovieListComponent,
    ScreeningListComponent,
    RoomListComponent,
    ChairListComponent,
    ChairStatusFilterComponent,
    MovieFormComponent,
    MovieEditComponent,
    ChairFormComponent,
    ChairEditComponent,
    RoomFormComponent,
    RoomEditComponent,
    ScreeningFormComponent,
    ScreeningEditComponent,
    MovieDetailComponent,
    RoomDetailComponent,
    ChairDetailComponent,
    ScreeningDetailComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RoutingModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

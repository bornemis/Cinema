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
  MatInputModule
} from '@angular/material';
import { MainPageComponent } from './main-page/main-page.component';
import { RoutingModule } from './routing/routing.module';
import { MovieStatusFilterComponent } from './movie-status-filter/movie-status-filter.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ScreeningListComponent } from './screening-list/screening-list.component';
import { DFilterComponent } from './d-filter/d-filter.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ChairListComponent } from './chair-list/chair-list.component';
import { ChairStatusFilterComponent } from './chair-status-filter/chair-status-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MovieStatusFilterComponent,
    IssueFormComponent,
    MovieListComponent,
    ScreeningListComponent,
    DFilterComponent,
    RoomListComponent,
    ChairListComponent,
    ChairStatusFilterComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PostListComponent } from './post-list/post-list.component';
import { SearchComponent } from './search/search.component';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { TagPageComponent } from './tag-page/tag-page.component';
import { TagCloudComponent } from './tag-cloud/tag-cloud.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { EditPostPageComponent } from './edit-post-page/edit-post-page.component';
import { ConfirmPostDeletionPageComponent } from './confirm-post-deletion-page/confirm-post-deletion-page.component';
import { PostExistsService } from './post-exists.service';
import { AuthorarizationService } from './authorarization.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'search/:keywords',
    component: SearchResultPageComponent
  },
  {
    path: 'tag/:tag',
    component: TagPageComponent
  },
  {
    path: 'sign-in',
    component: SignInPageComponent
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent
  },
  {
    path: 'post/:postNo/edit',
    component: EditPostPageComponent
  },
  {
    path: 'post/:postNo/confirm-delete',
    component: ConfirmPostDeletionPageComponent,
    canActivate: [PostExistsService, AuthorarizationService]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageContainerComponent,
    SidebarComponent,
    HomePageComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    PostListComponent,
    SearchComponent,
    SearchResultPageComponent,
    TagPageComponent,
    TagCloudComponent,
    TagListComponent,
    SignInPageComponent,
    SignUpPageComponent,
    EditPostPageComponent,
    ConfirmPostDeletionPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import {UserService} from './services/user.service';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import {PostService} from './services/post.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
const routes: Routes = [
  {path: 'users', component: UsersPageComponent, children: [
      {path: ':userId', component: UserCardComponent}
    ]},
  {path: 'posts', component: PostsPageComponent, children: [
      {path: ':postId', component: PostCardComponent}
    ]},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersPageComponent,
    PostsPageComponent,
    UserCardComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

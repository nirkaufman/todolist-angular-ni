import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TodolistModule} from './todolist/todolist.module';
import {AuthModule} from './auth/auth.module';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './auth/sign-in/login.component';
import {TodolistComponent} from './todolist/todolist.component';
import {UserProfileModule} from './user-profile/user-profile.module';
import {UserProfileComponent} from './user-profile/user-profile/user-profile.component';
import {HttpClientModule} from '@angular/common/http';

const routes = [
  {path: '', component: LoginComponent},
  {path: 'list', component: TodolistComponent},
  {path: 'profile', component: UserProfileComponent},
];

@NgModule({
  declarations: [AppComponent],
  providers: [],
  imports: [
    BrowserModule,
    TodolistModule,
    AuthModule,
    UserProfileModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

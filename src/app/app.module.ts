import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import {express} from 'express';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReserveComponent} from './reserve/reserve.component';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin/admin.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reserve', component: ReserveComponent},
   { path: 'post', component: PostComponent},
   { path: 'admin', component: AdminComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ReserveComponent,
    PostComponent,
    AdminComponent,
    MovieSearchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthService, 
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

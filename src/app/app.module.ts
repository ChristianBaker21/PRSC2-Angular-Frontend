import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuitemComponent } from './menuitem/menuitem/menuitem.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail/user-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    MenuitemComponent,
    UserComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


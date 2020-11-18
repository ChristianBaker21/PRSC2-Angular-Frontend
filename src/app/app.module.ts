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
import { UserCreateComponent } from './user-create/user-create/user-create.component';
//import { SortPipe } from './core/sort.pipe';
import { VendorComponent } from './vendor/vendor/vendor.component';
import { VendorListComponent } from './vendor-list/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit/vendor-edit.component';



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
    UserDetailComponent,
    UserCreateComponent,
    //SortPipe,
    VendorComponent,
    VendorListComponent,
    VendorEditComponent
    

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


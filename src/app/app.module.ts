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
import { VendorDetailComponent } from './vendor-detail/vendor-detail/vendor-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorCreateComponent } from './vendor-create/vendor-create/vendor-create.component';
import { ProductComponent } from './product/product/product.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create/product-create.component';
import { RequestlineEditComponent } from './requestline-edit/requestline-edit/requestline-edit.component';
import { RequestlineDeleteComponent } from './requestline-delete/requestline-delete/requestline-delete.component';
import { RequestlineComponent } from './requestline/requestline/requestline.component';
import { ProductDetailComponent } from './product-detail/product-detail/product-detail.component';
import { RequestComponent } from './request/request/request.component';
import { RequestCreateComponent } from './request-create/request-create/request-create.component';
import { RequestListComponent } from './request-list/request-list/request-list.component';
import { RequestDetailComponent } from './request-detail/request-detail/request-detail.component';
import { RequestEditComponent } from './request-edit/request-edit/request-edit.component';
import { RequestReviewComponent } from './Request-Review/request-review/request-review.component';



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
    VendorEditComponent,
    VendorDetailComponent,
    UserLoginComponent,
    VendorCreateComponent,
    ProductComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductCreateComponent,
    RequestlineEditComponent,
    RequestlineDeleteComponent,
    RequestlineComponent,
    ProductDetailComponent,
    RequestComponent,
    RequestCreateComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestReviewComponent,
    

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


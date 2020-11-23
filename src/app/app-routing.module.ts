import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ProductCreateComponent } from './product-create/product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { UserCreateComponent } from './user-create/user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorCreateComponent } from './vendor-create/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor-list/vendor-list/vendor-list.component'


const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "menu", component: MenuComponent },
  { path: "home", component: HomeComponent },
  {path: "about", component: AboutComponent},
  {path: "UserList", component: UserListComponent},
  {path: "user/edit/:id", component: UserEditComponent},
  {path: "user/detail/:id", component: UserDetailComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: "VendorList", component: VendorListComponent},
  {path: "vendor/edit/:id", component: VendorEditComponent},
  {path: "vendor/detail/:id", component: VendorDetailComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: "vendor/create", component: VendorCreateComponent},
  {path: "ProductList", component: ProductListComponent},
  {path: "product/edit/:id", component: ProductEditComponent},
  {path: "product/create", component: ProductCreateComponent},
  {path: "**", component: E404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


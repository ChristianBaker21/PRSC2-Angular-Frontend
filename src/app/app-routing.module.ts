import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { UserDetailComponent } from './user-detail/user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list/user-list.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {path: "about", component: AboutComponent},
  {path: "UserList", component: UserListComponent},
  {path: "user/edit/:id", component: UserEditComponent},
  {path: "user/detail/:id", component: UserDetailComponent},
  {path: "**", component: E404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


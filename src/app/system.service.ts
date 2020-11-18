import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/user/user.class';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedInUser: User = null;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  
  isAdmin(): boolean {


    return (this.loggedInUser == null) ? false : this.loggedInUser.isAdmin;
  }

  checkLogin(): void {
// if user is not logged in, send to login page
// comment out this code for testing purposes
    if (this.loggedInUser == null) {
      console.log('User is not logged in... redirecting to login.');
      this.router.navigateByUrl('/user/login');
    }
  }
baseurl: string = "http://localhost:50455/api";



  list(): void {
    this.http.get(this.baseurl).subscribe(
      res => { console.log(res);},
      err => { console.error(err); }
    );
  }
}


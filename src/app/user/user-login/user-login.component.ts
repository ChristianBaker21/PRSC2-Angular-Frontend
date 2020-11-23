import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  message: string = "";
  username: string = "Christian";
  password: string = "Baker"
  user: User = null;

  constructor(private userSvc: UserService,
              private sysSvc: SystemService,
              private router: Router) { }

  ngOnInit(): void {
    //
    this.username = '';
    this.password = '';
    this.sysSvc.loggedInUser = null;
  }

  login() {
    console.log('in login method...');
    this.userSvc.login(this.username, this.password).subscribe(
      res => {
        console.log('login()... ', res);
        //successful login
        this.user = res as User;
        this.sysSvc.loggedInUser = this.user;
        this.router.navigateByUrl('/home');
      },
      err =>
      {
        console.log('error... ', err);
        //login error...display in message
        this.message = 'invalid login';
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe ( res => { console.log(res);
       this.users = res as User[];
      },
      err => {console.error(err); }
       )

    
  }

}


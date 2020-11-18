import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User= new User();
  constructor(private usersvc: UserService,
  private route: ActivatedRoute, 
  private router: Router
  ) { }

  save(): void{
    console.log(this.user);
    this.usersvc.create(this.user).subscribe(
      res => {
        console.debug("User Create:", res);
        this.router.navigateByUrl("UserList");
      },
      err => {console.error("Error creating user: ", err); }
    );
  }

  ngOnInit(): void {
   
    
  }

}



import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  constructor(private usersvc: UserService,
  private route: ActivatedRoute, 
  private router: Router
  ) { }

 

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
        console.debug("User:", res);
        this.user = res;
      },
      err => { console.error(err); }
    );
  }

  back(): void{
    console.log(this.user);
    this.usersvc.change(this.user).subscribe(
      res => {
        console.debug("Go Back:", res);
        this.router.navigateByUrl("UserList");
      },
      err => {console.error("Error changing user: ", err); }
    );
  }

}


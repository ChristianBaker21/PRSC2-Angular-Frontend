import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request/request/request.service';
import { Request } from 'src/app/requestline/requestline/request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];
  users: User[]
  user: User;

  constructor(
    private rqstsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService,
    private syssvc: SystemService

  ) { }


  ngOnInit(): void {
    this.rqstsvc.list().subscribe(
      res => {
        console.log(res);
        this.requests = res as Request[];
      },
      err => { console.error(err) }
    );

    this.user = this.syssvc.loggedInUser;



  }

}



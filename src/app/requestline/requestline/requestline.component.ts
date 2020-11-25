import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request/request.service';
import { SystemService } from 'src/app/system.service';
import { UserService } from 'src/app/user/user.service';
import { RequestLineService } from './requestline.service.service';
import { Request } from 'src/app/requestline/requestline/request.class';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-requestline',
  templateUrl: './requestline.component.html',
  styleUrls: ['./requestline.component.css']
})
export class RequestlineComponent implements OnInit {

    requests: Request[] = [];
  
    constructor(
      private rqstsvc: RequestService,
      private route: ActivatedRoute,
      private router: Router,
      private usersvc: UserService,
      private syssvc: SystemService
  
    ) { }
  
    users: User[]
    user: User;
  
    ngOnInit(): void {
      this.rqstsvc.list().subscribe(
         res => { console.log(res),
         this.requests = res as Request[]},
        err => {console.error(err)}
         );
          this.usersvc.list().subscribe(
             res => { console.log(res),
             this.users = res;
            },
            err => {console.error(err); }
             );
             this.user = this.syssvc.loggedInUser;
  }






}

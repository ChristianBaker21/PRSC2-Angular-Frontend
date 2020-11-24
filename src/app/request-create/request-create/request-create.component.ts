import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/request/request/request.class'

import { RequestService } from 'src/app/request/request/request.service';
import { SystemService } from 'src/app/system.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request= new Request();
  constructor(private  reqsvc: RequestService,
  private route: ActivatedRoute, 
  private router: Router,
  private sysserv: SystemService
  ) { }

  save(): void{
    console.log(this.request);
    this.reqsvc.create(this.request).subscribe(
      res => {
        console.debug("Request Create:", res);
        this.router.navigateByUrl("request/list");
      },
      err => {console.error("Error creating request: ", err); }
    );
  }

  ngOnInit(): void {
    this.request.userid=this.sysserv.loggedInUser.id;
   
    
  }

}



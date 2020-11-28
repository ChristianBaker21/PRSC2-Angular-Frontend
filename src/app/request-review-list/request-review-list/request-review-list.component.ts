import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request/request.service';
import { SystemService } from 'src/app/system.service';
import { Request } from 'src/app/requestline/requestline/request.class';
@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  constructor(
    private rqstsvc: RequestService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  requests: Request[] = [];
  ifRejected: boolean = false;

  ngOnInit(): void {
    this.rqstsvc.getRequestinReview(this.syssvc.loggedInUser.id).subscribe(
      res => {
        console.debug("Request:", res);
        this.requests = res;
      },
      err => { console.error(err); }
    );
  }


beforeReject(): void{
  this.ifRejected = !this.ifRejected
}


 
   back():void{
     this.router.navigateByUrl("/requests/list");
   }
  }
    


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Request } from 'src/app/requestline/requestline/request.class';
import { RequestService } from 'src/app/request/request/request.service';
import { Requestline } from 'src/app/requestline/requestline/requestline.class'


@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  constructor(
    private rqstsvc: RequestService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  request: Request;
  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void{
    let id = this.route.snapshot.params.id;
    this.rqstsvc.getRequestinReview(id).subscribe()
      res =>{console.debug(res);
      err =>{ console.error(err);}
    
  }
}
  
  reject():void{
    this.rqstsvc.rejectRequest(this.request).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("requests/reviewlist");
      },
      err => {console.log(err)}
    )
  }
  approve():void{
    this.rqstsvc.approveRequest(this.request).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("requests/reviewlist");},
      err => {console.log(err)}
    )
  }
  save():void{
    this.router.navigateByUrl("/requests/list");
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request/request/request.service';
import { SystemService } from '../system.service';
import { Request } from 'src/app/requestline/requestline/request.class';
@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  constructor(
    private rqstsvc: RequestService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router,
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
approveRequest(): void{
  this.rqstsvc.approveRequest(this.request).subscribe(
    res => {
      console.log(res);
      this.router.navigateByUrl("request/reviewlist");},
      err => {console.log(err)}
  )
}
save(): void{
  this.router.navigateByUrl("request/list")
}
  }



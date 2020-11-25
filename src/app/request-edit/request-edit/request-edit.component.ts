import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request/request.service';
import { Request } from 'src/app/requestline/requestline/request.class'

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request;
  constructor(private reqsvc: RequestService,
  private route: ActivatedRoute, 
  private router: Router
  ) { }

 

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.reqsvc.get(id).subscribe(
      res => {
        console.debug("Request:", res);
        this.request = res;
      },
      err => { console.error(err); }
    );
  }

  save(): void{
    console.log(this.request);
    this.reqsvc.change(this.request).subscribe(
      res => {
        console.debug("Save :", res);
        this.router.navigateByUrl("request/list");
      },
      err => {console.error("Error changing request: ", err); }
    );
  }

}



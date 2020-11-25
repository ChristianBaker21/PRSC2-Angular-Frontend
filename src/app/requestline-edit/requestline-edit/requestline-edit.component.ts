import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/requestline/requestline/request.class'
import { RequestService } from 'src/app/request/request/request.service';
import { Requestline } from 'src/app/requestline/requestline/requestline.class';
import { RequestLineService } from 'src/app/requestline/requestline/requestline.service'
import { SystemService } from 'src/app/system.service';


@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {

  requestline: Requestline
  constructor(
  private route: ActivatedRoute, 
  private router: Router,
  private sysserv: SystemService,
  private rlsvc: RequestLineService
  ) { }

  ngOnInit(): void {

  }

  save(): void{
    console.log(this.requestline);
    this.rlsvc.change(this.requestline).subscribe(
      res => {
        console.debug("Save :", res);
        this.router.navigateByUrl("/requestline");
      },
      err => {console.error("Error changing request: ", err); }

    );
  }
}





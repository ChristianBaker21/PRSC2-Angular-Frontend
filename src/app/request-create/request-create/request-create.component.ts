import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/request/request/request.class'

import { RequestService } from 'src/app/request/request/request.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request= new Request();
  constructor(private usersvc: RequestService,
  private route: ActivatedRoute, 
  private router: Router
  ) { }

  save(): void{
    console.log(this.request);
    this.usersvc.create(this.request).subscribe(
      res => {
        console.debug("Request Create:", res);
        this.router.navigateByUrl("RequestList");
      },
      err => {console.error("Error creating request: ", err); }
    );
  }

  ngOnInit(): void {
   
    
  }

}



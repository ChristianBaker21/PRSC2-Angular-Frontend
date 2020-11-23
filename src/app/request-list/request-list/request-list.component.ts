import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request/request/request.service';
import { Request } from 'src/app/request/request/request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];

  constructor(
    private rqstsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.rqstsvc.list().subscribe ( res => { console.log(res);
       this.requests = res as Request[];
      },
      err => {console.error(err); }
       )

    
  }

}

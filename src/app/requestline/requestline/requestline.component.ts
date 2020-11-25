import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request/request/request.service';

@Component({
  selector: 'app-requestline',
  templateUrl: './requestline.component.html',
  styleUrls: ['./requestline.component.css']
})
export class RequestlineComponent implements OnInit {

  constructor(
    private rqtsvc: RequestService
    private lisvc:
  ) { }

  ngOnInit(): void {
  }

}

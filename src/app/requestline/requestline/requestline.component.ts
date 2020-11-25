import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request/request.service';
import { SystemService } from 'src/app/system.service';
import { UserService } from 'src/app/user/user.service';
import { RequestLineService } from 'src/app/requestline/requestline/requestline.service'
import { Request } from 'src/app/requestline/requestline/request.class';
import { User } from 'src/app/user/user.class';
import { Requestline } from './requestline.class';

@Component({
  selector: 'app-requestline',
  templateUrl: './requestline.component.html',
  styleUrls: ['./requestline.component.css']
})
export class RequestlineComponent implements OnInit {
  
  request: Request= null;
  requestlines: Requestline[]= [];
  user: User;
  
  constructor(
    private rqstsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService,
    private syssvc: SystemService
    
    ) { }
    
  
    ngOnInit(): void {
      this.refresh();
    }

    delete(id: number): void {
      console.debug(`Deleting line id ${id}`);
      this.rqstsvc.remove(id).subscribe(
        res => { this.refresh(); },
        err => { console.error(err);}
      );
      }
    
      
      
      refresh(): void{
        let id = +this.route.snapshot.params.id;
        this.rqstsvc.get(id).subscribe(
           res => {
             console.log( res );
           this.request = res as Request},
          err => {console.error(err)}
           );
           //populate requestlines with lines for this request
      }
    
  }
//review() : void{
  //this.rqstsvc.reviewRequest(this.request).subscribe(
    //res => {console.log(res);},
    //err => {console.error(err)}
  //)










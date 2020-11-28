import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product/product.class';
import { ProductService } from 'src/app/product/product/product.service';
import { RequestService } from 'src/app/request/request/request.service';
import { Requestline } from 'src/app/requestline/requestline/requestline.class';
import { RequestLineService } from 'src/app/requestline/requestline/requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  constructor(
    private rlsvc: RequestLineService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private rqstsvc: RequestService,
    private router: Router
  ) { }

  requestline: Requestline = new Requestline;
  products: Product[] = [];
  request: Request;

  ngOnInit(): void {
   
    let id = +this.route.snapshot.params.id;
    this.rlsvc.getRLine(id).subscribe(
      res => {
        console.log(res);
        this.requestline = res;
      },
      err => {
        console.error(err);
      }
    )
    this.productsvc.list().subscribe(
      res => {
        console.log(res);
        this.products = res;
      },
      err => {
        console.error(err);
      }
    
    )
    this.requestline.requestId = +id;
  }
  
  
  save(): void{
    console.log(this.requestline);
    this.rlsvc.change(this.requestline).subscribe(
      res => {
        console.debug("RequestLine Change:", res);
        this.router.navigateByUrl(`/request/requestline/${this.requestline.requestId}`);
      },
      err => {console.error("Error Change request: ", err); }
      );
  }

  
       
  
    
  }
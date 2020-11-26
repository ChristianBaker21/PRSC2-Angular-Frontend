import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product/product.class';
import { ProductService } from 'src/app/product/product/product.service';
import { RequestService } from 'src/app/request/request/request.service';
import { Requestline } from 'src/app/requestline/requestline/requestline.class';
import { RequestLineService } from 'src/app/requestline/requestline/requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

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
    this.productsvc.list().subscribe(
      res => {
        console.log(res);
        this.products = res;
      },
      err => {
        console.error(err);
      }
    )
    this.requestline.requestid = +id;
  }
  
  
  save(): void{
    console.log(this.requestline);
    this.rlsvc.create(this.requestline).subscribe(
      res => {
        console.debug("RequestLine Create:", res);
        this.router.navigateByUrl(`/request/requestline/${this.requestline.requestid}`);
      },
      err => {console.error("Error creating request: ", err); }
      );
  }

  
       
  
    
  }

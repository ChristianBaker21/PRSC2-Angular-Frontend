import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product/product.class';
import { ProductService } from 'src/app/product/product/product.service';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private prdsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.prdsvc.list().subscribe ( res => { console.log(res);
       this.products = res as Product[];
      },
      err => {console.error(err); }
       )

    
  }

}

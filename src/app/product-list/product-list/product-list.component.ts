import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product/product.service';
import { Product } from 'src/app/product/product/product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  pageTitle: string = "Product List";
  searchCriteria: string = "";
  sortColumn: string = "name"
  sortAsc: boolean = true;


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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product/product.class';
import { ProductService } from 'src/app/product/product/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product= new Product();
  constructor(private prodsvc: ProductService,
  private route: ActivatedRoute, 
  private router: Router
  ) { }

  save(): void{
    console.log(this.product);
    this.prodsvc.create(this.product).subscribe(
      res => {
        console.debug("Product Create:", res);
        this.router.navigateByUrl("ProductList");
      },
      err => {console.error("Error creating product: ", err); }
    );
  }

  ngOnInit(): void {
   
    
  }

}



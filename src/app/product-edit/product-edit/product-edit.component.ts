import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product/product.class';
import { ProductService } from 'src/app/product/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  constructor(private prdsvc: ProductService,
  private route: ActivatedRoute, 
  private router: Router
  ) { }

  save(): void{
    console.log(this.product);
    this.prdsvc.change(this.product).subscribe(
      res => {
        console.debug("Product Change:", res);
        this.router.navigateByUrl("ProductList");
      },
      err => {console.error("Error changing  product: ", err); }
    );
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.prdsvc.get(id).subscribe(
      res => {
        console.debug("Product:", res);
        this.product = res;
      },
      err => { console.error(err); }
    );
  }

}

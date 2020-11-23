import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product/product.class';
import { ProductService } from 'src/app/product/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(private prdsvc: ProductService,
  private route: ActivatedRoute, 
  private router: Router
  ) { }

  save(): void{
    console.log(this.product);
    this.prdsvc.change(this.product).subscribe(
      res => {
        console.debug("Product Detail:", res);
        this.router.navigateByUrl("product/list");
      },
      err => {console.error("Error detailing  product: ", err); }
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

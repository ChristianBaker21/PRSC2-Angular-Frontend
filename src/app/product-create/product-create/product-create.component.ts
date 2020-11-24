import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product/product.class';
import { ProductService } from 'src/app/product/product/product.service';
import { Vendor } from 'src/app/vendor/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

vendors: Vendor[]=[]
  saved: string = "save"

  product: Product= new Product();
  constructor(private prodsvc: ProductService,
  private route: ActivatedRoute, 
  private router: Router,
  private vendserv: VendorService
  ) { }

  ngOnInit(): void
    {
    this.vendserv.list().subscribe(
      res => {
        console.log(res);
        this.vendors = res as Vendor[];
      },
      err => 
      {console.error(err); }
    )
    }
saves(): void
{
  this.saved = "Save";
}

save(): void
{
  console.log(this.product);
    this.prodsvc.create(this.product).subscribe(
      res => {
        console.debug("Product Create:", res);
        this.router.navigateByUrl("/product/list");
        this.saved= "Saved!";
      },
      err => {console.error("Error creating request: ", err); }
    )
  }



   
    
  }







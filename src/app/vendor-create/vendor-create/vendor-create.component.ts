import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/vendor/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor= new Vendor();
  constructor(private vendsvc : VendorService,
  private route: ActivatedRoute, 
  private router: Router
  ) { }

  save(): void{
    console.log(this.vendor);
    this.vendsvc.create(this.vendor).subscribe(
      res => {
        console.debug("Vendor Create:", res);
        this.router.navigateByUrl("VendorList");
      },
      err => {console.error("Error creating vendor: ", err); }
    );
  }

  ngOnInit(): void {
   
    
  }

}



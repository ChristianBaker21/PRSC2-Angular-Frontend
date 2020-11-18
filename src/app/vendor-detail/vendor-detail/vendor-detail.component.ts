import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/vendor/vendor/vendor.class'
import { VendorService } from 'src/app/vendor/vendor/vendor.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor;
  constructor(private vendorsvc: VendorService,
  private route: ActivatedRoute, 
  private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.vendorsvc.get(id).subscribe(
      res => {
        console.debug("Vendor:", res);
        this.vendor = res;
      },
      err => { console.error(err); }
    );
  }
  
  save(): void{
    console.log(this.vendor);
    this.vendorsvc.change(this.vendor).subscribe(
      res => {
        console.debug("Go Back:", res);
        this.router.navigateByUrl("VendorList");
      },
      err => {console.error("Error changing user: ", err); }
    );
  }

}


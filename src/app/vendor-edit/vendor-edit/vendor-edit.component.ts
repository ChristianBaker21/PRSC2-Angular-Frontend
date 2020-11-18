import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/vendor/vendor/vendor.class'
import { VendorService } from 'src/app/vendor/vendor/vendor.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor;
  constructor(private usersvc: VendorService,
  private route: ActivatedRoute, 
  private router: Router
  ) { }

  save(): void{
    console.log(this.vendor);
    this.usersvc.change(this.vendor).subscribe(
      res => {
        console.debug("Vendor Change:", res);
        this.router.navigateByUrl("VendorList");
      },
      err => {console.error("Error changing vendor: ", err); }
    );
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
        console.debug("Vendor:", res);
        this.vendor = res;
      },
      err => { console.error(err); }
    );
  }

}

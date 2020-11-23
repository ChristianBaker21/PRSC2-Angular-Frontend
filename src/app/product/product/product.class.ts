import { Vendor } from 'src/app/vendor/vendor/vendor.class';

export class Product {
    id: number = 0;
    partnbr: string = "";
    name: string = "";
    price: number = 0;
    unit: string = "";
    photopath: string = "";


    vendorid: number = 0;
    vendor: Vendor = null;
    
    
    
    constructor () {
    
    }
    } 
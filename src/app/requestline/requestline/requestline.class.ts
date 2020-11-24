import { ɵɵqueryRefresh } from '@angular/core';
import { Product } from '../../product/product/product.class';
import { Request } from '../../request/request/request.class';

export class Requestline {
    id: number = 0;
    requestid: number = 0;
    productid: number = 0;
    quantity: number = 1;

    request: Request = null;
    product: Product = null;

    constructor () {}
}

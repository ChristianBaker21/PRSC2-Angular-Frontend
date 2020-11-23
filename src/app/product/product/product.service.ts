import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.class';
import { SyncAsync } from '@angular/compiler/src/util';

const baseurl: string = "http://localhost:50455/api/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient 
    ) { }

    list(): Observable<Product[]> {
      return this.http.get(`${baseurl}`) as Observable<Product[]>;  
    } 
    get(id: number): Observable<Product> {
      return this.http.get(`${baseurl}/${id}`) as Observable<Product>;
    }

    create(product: Product): Observable<Product> {
        return this.http.post(`${baseurl}`, product) as Observable<any>;
    }

    change(product: Product): Observable<any> {
      return this.http.put(`${baseurl}/${product.id}`, product) as Observable<any>;
    }
    remove(product: Product): Observable<any> {
      return this.http.delete(`${baseurl}/${product.id}`) as Observable<Product>;
    }
    
    
    }
    


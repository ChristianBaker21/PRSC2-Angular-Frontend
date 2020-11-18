import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';
import { SyncAsync } from '@angular/compiler/src/util';

const baseurl: string = "http://localhost:50455/api/vendors";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(
    private http: HttpClient 
    ) { }

    list(): Observable<Vendor[]> {
      return this.http.get(`${baseurl}`) as Observable<Vendor[]>;  
    } 
    get(id: number): Observable<Vendor> {
      return this.http.get(`${baseurl}/${id}`) as Observable<Vendor>;
    }

    create(vendor: Vendor): Observable<Vendor> {
        return this.http.post(`${baseurl}`, vendor) as Observable<any>;
    }

    change(vendor: Vendor): Observable<any> {
      return this.http.put(`${baseurl}/${vendor.id}`, vendor) as Observable<any>;
    }
    remove(vendor: Vendor): Observable<any> {
      return this.http.delete(`${baseurl}/${vendor.id}`) as Observable<Vendor>;
    }
    
    
    }
    2


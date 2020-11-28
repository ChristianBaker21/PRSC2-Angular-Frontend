import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SyncAsync } from '@angular/compiler/src/util';
import { Requestline } from './requestline.class'
import { RequestService } from 'src/app/request/request/request.service';

const baseurl: string = "http://localhost:50455/api/requestline";

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {

  constructor(
    private http: HttpClient,
    private rqtsvc: RequestService
    ) { }

    list():Observable<Requestline[]>{
      return this.http.get(`${baseurl}`) as Observable<Requestline[]>;
    }

    getRLine(number: number): Observable<Requestline> {
      return this.http.get(`${baseurl}/${number}`) as Observable<Requestline>;
    }
    

    listByRequest(requestId: number): Observable<Requestline[]> {
      return this.http.get(`${baseurl}/request/${requestId}`) as Observable<Requestline[]>;
    }
    

    create(requestline: Requestline): Observable<any> {
      return this.http.post(`${baseurl}`, requestline) as Observable<any>;
    }
    

    change(requestline:Requestline): Observable<any> {
      return this.http.put(`${baseurl}/${requestline.id}`, requestline) as Observable<Requestline>;
    }
    

    remove(number: number): Observable<Requestline> {
      return this.http.delete(`${baseurl}/${number}`) as Observable<Requestline>;
    }
  }
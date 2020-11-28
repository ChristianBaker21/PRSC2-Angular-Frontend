import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../../requestline/requestline/request.class';
import { SyncAsync } from '@angular/compiler/src/util';

const baseurl: string = "http://localhost:50455/api/requests";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient 
    ) { }

    list(): Observable<Request[]> {
      return this.http.get(`${baseurl}`) as Observable<Request[]>;  
    } 
    get(id: number): Observable<Request> {
      return this.http.get(`${baseurl}/${id}`) as Observable<Request>;
    }
    create(request: Request): Observable<Request> {
        return this.http.post(`${baseurl}`, request) as Observable<any>;
    }
    change(request: Request): Observable<any> {
      return this.http.put(`${baseurl}/${request.id}`, request) as Observable<any>;
    }
    remove(id: number): Observable<any> {
      return this.http.delete(`${baseurl}/${id}`) as Observable<any>;
    }
    getRequestinReview(id: number): Observable<Request[]> {
      return this.http.get(`${baseurl}/review/${id}`) as Observable<Request[]>;
    }
    reviewRequest(request: Request): Observable<any> {
      return this.http.put(`${baseurl}/ReviewRequest`, request) as Observable<any>;
    }
    approveRequest(request: Request): Observable<any> {
      return this.http.put(`${baseurl}/ApproveRequest`, request) as Observable<any>;
    }
    rejectRequest(request: Request): Observable<any> {
      return this.http.put(`${baseurl}/RejectRequest`, request) as Observable<any>;
    }
    
    
    }
    2


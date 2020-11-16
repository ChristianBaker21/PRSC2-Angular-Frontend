import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

baseurl: string = "http://localhost:50455/api/users";

  constructor(
    private http: HttpClient
  ) { }

  list(): void {
    this.http.get(this.baseurl).subscribe(
      res => { console.log(res);},
      err => { console.error(err); }
    );
  }
}

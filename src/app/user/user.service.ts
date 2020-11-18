import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';
import { SyncAsync } from '@angular/compiler/src/util';

const baseurl: string = "http://localhost:50455/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient 
    ) { }

    login(username: string, password: string): Observable<User> {
      return this.http.get(baseurl+username + '/' + password) as Observable<User>;
    }

    list(): Observable<User[]> {
      return this.http.get(`${baseurl}`) as Observable<User[]>;  
    } 
    get(id: number): Observable<User> {
      return this.http.get(`${baseurl}/${id}`) as Observable<User>;
    }

    create(user: User): Observable<User> {
        return this.http.post(`${baseurl}`, user) as Observable<any>;
    }

    change(user: User): Observable<any> {
      return this.http.put(`${baseurl}/${user.id}`, user) as Observable<any>;
    }
    remove(user: User): Observable<any> {
      return this.http.delete(`${baseurl}/${user.id}`) as Observable<User>;
    }
    
    
    }
    2


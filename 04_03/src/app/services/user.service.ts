import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _router: Router, private _http: HttpClient) { }
  getUsers() {
    return this._http.get('/users');
  }
}

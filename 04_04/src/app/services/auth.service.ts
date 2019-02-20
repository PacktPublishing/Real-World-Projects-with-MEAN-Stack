import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router, private _http: HttpClient) { }
  register(user) {
    return this._http.post('/register', user);
    // localStorage.setItem('user', user);
  }
  login(user) {
    return this._http.post('/login', user);
  }
  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }
  isAuthenticated() {
    return localStorage.getItem('user');
  }
}

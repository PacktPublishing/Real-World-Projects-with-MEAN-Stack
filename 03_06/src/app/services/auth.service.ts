import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) { }
  login(user) {
    localStorage.setItem('user', user);
  }
  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }
  isAuthenticated() {
    return localStorage.getItem('user');
  }
}

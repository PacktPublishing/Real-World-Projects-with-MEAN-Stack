import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }
  login(theUser: User) {
    this.authService.login(theUser).subscribe(data => {
      console.log(data);
      this._router.navigate(['/dashboard']);
      localStorage.setItem('user', JSON.stringify(data));
    });
  }
}

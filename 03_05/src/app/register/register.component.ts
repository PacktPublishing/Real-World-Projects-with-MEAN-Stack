import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    fullName: '',
    email: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }
  register(theUser) {
    console.log(theUser);
  }
}

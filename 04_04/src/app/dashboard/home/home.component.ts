import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [];
  constructor(private _user: UserService) { }

  ngOnInit() {
    this._user.getUsers().subscribe(res => console.log(res));
  }

}

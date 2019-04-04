import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    let myUser: User = {
      nick: 'Eduardo',
      subnick: 'Hola!',
      age: 28,
      email: 'aoe@aoe',
      friend: true,
      uid: 1
    };
    let users: User[] = [
      myUser
    ]
  }

  ngOnInit() {
  }

}

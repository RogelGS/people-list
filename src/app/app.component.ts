import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Listado de personas';

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDwAJB8SXZwNtdFkAzF27xaaeUWRoFabsA',
      authDomain: 'people-list-b6107.firebaseapp.com',
    });
  }

  isAuthenticated() {
    return this.loginService.isAuthenticated();
  }

  logOut() {
    this.loginService.logout();
  }

  // getPersonAdded(person: Person) {
  //   // this.people.push(person);
  //   this.peopleService.getPersonAdded(person);
  // }
}

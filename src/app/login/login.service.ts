import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable()
export class LoginService {
  private token: string = '';

  constructor(private router: Router) {}

  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((token) => {
            this.token = token;
            this.router.navigate(['/']);
          });
      });
  }

  getIdToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token !== "";
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.token = '';
        this.router.navigate(['login']);
      })
      .catch((err) => console.log(err));
  }
}

import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  token: string;
  private url = '/';

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate([this.url]);
          this.setRedirectUrl('/');
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken(): string {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  loadUser() {
    firebase.auth().onAuthStateChanged(
      (currentUser) => {
        if (currentUser !== null) {
          currentUser.getIdToken().then(
            (token: string) => this.token = token
          );
        }
      });
  }

  setRedirectUrl(url: string) {
    this.url = url;
  }
}


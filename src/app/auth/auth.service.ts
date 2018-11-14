import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as AuthActions from './store/auth.actions'

@Injectable()
export class AuthService {

  private url = '/';

  constructor(private router: Router,
              private store: Store<fromApp.AppState>) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        user => {
          this.store.dispatch(new AuthActions.Signup());
        }
      )
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.store.dispatch(new AuthActions.Signin());
          this.router.navigate([this.url]);
          this.setRedirectUrl('/');
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.store.dispatch(new AuthActions.SetToken(token));
              }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigate(['/']);
  }

  /*loadUser() {
    firebase.auth().onAuthStateChanged(
      (currentUser) => {
        if (currentUser !== null) {
          currentUser.getIdToken().then(
            (token: string) => this.token = token
          );
        }
      });
  }*/

  setRedirectUrl(url: string) {
    this.url = url;
  }
}


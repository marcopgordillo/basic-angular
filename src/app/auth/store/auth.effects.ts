import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import * as AuthActions from './auth.actions';


@Injectable()
export class AuthEffects {

  @Effect()
  authSignup = this.actions$
    .ofType(AuthActions.TRY_SIGNUP)
    .pipe(
      map(
        (action: AuthActions.TrySignup) => action.payload),
      switchMap(
        (authData: {username: string, password: string}) => {
          return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
        }),
      switchMap(
        () => {
          return from(firebase.auth().currentUser.getIdToken());
        }),
      mergeMap(
        (token: string) => {
          this.router.navigate(['/']);
          return [
            {
              type: AuthActions.SIGNUP
            },
            {
              type: AuthActions.SET_TOKEN,
              payload: token
            }
          ];
        }
      )
    );

  @Effect()
  authSignin = this.actions$
    .ofType(AuthActions.TRY_SIGNIN)
    .pipe(
      map(
        (action: AuthActions.TrySignin) => action.payload),
      switchMap(
        (authData: {username: string, password: string}) => {
          return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
        }),
      switchMap(
        () => {
          return from(firebase.auth().currentUser.getIdToken());
        }),
      mergeMap(
        (token: string) => {
          this.router.navigate(['/']);
          return [
            {
              type: AuthActions.SIGNIN
            },
            {
              type: AuthActions.SET_TOKEN,
              payload: token
            }
          ];
        }
      )
    );

  constructor(private actions$: Actions,
              private router: Router) { // $ indicates that is an Observable, but is optional

  }
}

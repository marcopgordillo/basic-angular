import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { from } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import * as AuthActions from './auth.actions';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from './auth.reducers';

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

          this.store.select('auth').pipe(take(1))
            .subscribe(
              (authState: fromAuth.State) => {
                if (authState.url != null) {
                  this.router.navigate([authState.url]);
                } else {
                  this.router.navigate(['/']);
                }
              });

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

  @Effect({dispatch: false})
  authLogout = this.actions$
    .ofType(AuthActions.LOGOUT)
    .pipe(
      tap(
      () => {
          firebase.auth().signOut();
          this.router.navigate(['/']);
        }
      )
    );

  constructor(private actions$: Actions,
              private router: Router,
              private store: Store<fromApp.AppState>) { // $ indicates that is an Observable, but is optional

  }
}

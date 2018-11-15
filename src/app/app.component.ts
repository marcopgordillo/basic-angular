import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { environment } from '../environments/environment';
import { AppState } from './store/app.reducers';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    firebase.initializeApp(environment.firebase);

    firebase.auth().onAuthStateChanged(
      (currentUser) => {
        if (currentUser) {
          currentUser.getIdToken().then(
            (token: string) => {
              this.store.dispatch(new AuthActions.Signin());
              this.store.dispatch(new AuthActions.SetToken(token));
            }
          );
        }
      }
    );
  }
}

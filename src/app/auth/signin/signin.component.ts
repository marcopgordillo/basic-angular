import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  @ViewChild('signinForm')
  private signinForm: NgForm;

  constructor(private store: Store<fromApp.AppState>) { }

  onSignin() {
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;
    this.store.dispatch(new AuthActions.TrySignin({username: email, password: password}));
  }
}

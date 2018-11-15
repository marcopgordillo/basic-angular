import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  @ViewChild('signupForm')
  private signupForm: NgForm;

  constructor(private store: Store<fromApp.AppState>) { }

  onSignup() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.store.dispatch(new AuthActions.TrySignup({username: email, password: password}));
  }

}

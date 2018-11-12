import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('signupForm')
  private signupForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSignup() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
  }

}

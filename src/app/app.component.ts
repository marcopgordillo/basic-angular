import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  private selectedSubscription = 'Advanced';

  @ViewChild('signupForm')
  private signupForm: NgForm;

  onSubmit() {
    console.log(this.signupForm.value);
  }
}

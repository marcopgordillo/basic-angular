import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  private selectedSubscription: string = 'Advanced';
}

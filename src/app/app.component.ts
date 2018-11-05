import {Component} from '@angular/core';
import {ServerModel} from 'server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private serverElements: ServerModel[] = [];
}

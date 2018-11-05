import {Component} from '@angular/core';
import {ServerModel} from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private serverElements: ServerModel[] = [];

  onServerAdded(serverData: ServerModel): void {
    this.serverElements.push(serverData);
  }

  onChangeFirst(): void {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst(): void {
    this.serverElements.splice(0,1);
  }
}

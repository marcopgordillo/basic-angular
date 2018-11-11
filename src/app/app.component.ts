import {Component} from '@angular/core';
import {ServerModel} from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers: ServerModel[] = [
    new ServerModel('TestServer', 10, this.generateId()),
    new ServerModel('LiveServer', 100, this.generateId())
  ];

  onAddServer(name: string) {
    this.servers.push(new ServerModel(name, 50, this.generateId()));
  }

  private generateId(): number {
    return Math.round(Math.random() * 10000);
  }
}

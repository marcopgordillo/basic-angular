import {Component} from '@angular/core';
import {ServerModel} from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private servers: ServerModel[] = [
    new ServerModel('medium', 'Production Server', 'stable', new Date(2017, 1, 15)),
    new ServerModel('large', 'User Database', 'stable', new Date(2017, 1, 15)),
    new ServerModel('small', 'Development Server', 'offline', new Date(2017, 1, 15)),
    new ServerModel('small', 'Testing Environment Server', 'critical', new Date(2017, 1, 15))
  ];

  getStatusClasses(server: ServerModel) {
    return {
      'list-group-item-success' : server.status === 'stable',
      'list-group-item-warning' : server.status === 'offline',
      'list-group-item-danger' : server.status === 'critical',
    };
  }
}

import {Component, OnInit} from '@angular/core';
import {ServerModel} from './server.model';
import {ServerService} from './server.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  servers: ServerModel[] = [
    new ServerModel('TestServer', 10, this.generateId()),
    new ServerModel('LiveServer', 100, this.generateId())
  ];

  private appName: Observable<Object>;

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.appName = this.serverService.getAppName();
  }

  onAddServer(name: string) {
    this.servers.push(new ServerModel(name, 50, this.generateId()));

  }

  onSave() {
    this.serverService.storeServers(this.servers). subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (servers: ServerModel[]) => this.servers = servers,
      (error) => console.error(error)
    );
  }

  private generateId(): number {
    return Math.round(Math.random() * 10000);
  }
}

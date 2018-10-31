import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /*template: '<app-server></app-server><app-server></app-server>',*/
  /*template: `
    <app-server></app-server>
    <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private allowNewServer: boolean = false;
  private serverCreationStatus: string = 'No server was created';
  private serverName: string = 'Test Server';
  private username: string = '';
  private serverCreated: boolean = false;
  private servers: string[] = ['TestServer', 'LinuxServer'];
  private showSecret: boolean;
  private log: string[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event): void {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleDetails(): void {
    this.showSecret = ! this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}

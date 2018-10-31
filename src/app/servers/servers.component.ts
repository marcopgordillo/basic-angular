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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'Server was created!';
  }

}

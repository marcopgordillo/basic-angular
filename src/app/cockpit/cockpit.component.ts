import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServerModel} from "../server.model";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('srvCreated')
  private serverCreated: EventEmitter<ServerModel> = new EventEmitter<ServerModel>();

  private newServerName:string = '';
  private newServerContent:string = '';

  constructor() { }

  ngOnInit() {
  }

  public onAddServer(): void {
    this.serverCreated.emit({
      name: this.newServerName,
      type: 'server',
      content: this.newServerContent
    });
  }

  public onAddBlueprint(): void {
    this.serverCreated.emit({
      name: this.newServerName,
      type: 'blueprint',
      content: this.newServerContent
    });
  }

}

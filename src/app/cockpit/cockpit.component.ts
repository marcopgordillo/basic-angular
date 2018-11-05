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

  public onAddServer(nameInput: HTMLInputElement): void {
    this.serverCreated.emit({
      name: nameInput.value,
      type: 'server',
      content: this.newServerContent
    });
  }

  public onAddBlueprint(nameInput: HTMLInputElement): void {
    this.serverCreated.emit({
      name: nameInput.value,
      type: 'blueprint',
      content: this.newServerContent
    });
  }

}

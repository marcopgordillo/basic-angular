import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  private newServerName:string = '';
  private newServerContent:string = '';

  constructor() { }

  ngOnInit() {
  }

  public onAddServer(): void {
    this.serverElements.push({name: this.newServerName, type: 'server', content: this.newServerContent});
  }

  public onAddBlueprint(): void {
    this.serverElements.push({name: this.newServerName, type: 'blueprint', content: this.newServerContent});
  }

}

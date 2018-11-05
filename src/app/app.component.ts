import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private newServerName:string = '';
  private newServerContent:string = '';

  private serverElements: {name: string, type: string, content: string}[] = [];

  public onAddServer(): void {
    this.serverElements.push({name: this.newServerName, type: 'server', content: this.newServerContent});
  }

  public onAddBlueprint(): void {
    this.serverElements.push({name: this.newServerName, type: 'blueprint', content: this.newServerContent});
  }
}

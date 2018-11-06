import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private numbers: number[] = [1, 2, 3, 4, 5];
  private oddNumbers: number[] = [1, 3, 5];
  private evenNumbers: number[] = [2, 4];
  private onlyOdd: boolean = false;
}

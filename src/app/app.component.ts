import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private oddNumbers: number[] = [];
  private evenNumbers: number[] = [];
  private numbers: number[] = [];

  public onIntervalFired(firedNumber: number) {
    /*if (firedNumber % 2 === 0) {
      this.oddNumbers.push(firedNumber);
    } else {
      this.evenNumbers.push(firedNumber);
    }*/
    this.numbers.push(firedNumber);
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  private intervalFired: EventEmitter<number> = new EventEmitter<number>();

  private interval: number;
  private lastNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  public doStartGame(): void {
    this.interval = setInterval(() => {
      this.intervalFired.emit(++this.lastNumber);
    }, 1000)
  }

  public doPauseGame(): void {
    clearInterval(this.interval);
  }

}

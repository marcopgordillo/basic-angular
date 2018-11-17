import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  private _message: string;

  @Input()
  set message(message: string) {
    this._message = message;
  }

  get message(){
    return this._message;
  }

  constructor() { }

  ngOnInit() {
  }

}

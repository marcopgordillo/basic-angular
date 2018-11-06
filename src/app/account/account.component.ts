import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountModel} from "../models/account.model";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input()
  private account: AccountModel;

  @Input()
  private id: number;

  @Output()
  private statusChanged: EventEmitter<{id: number, newStatus: string}> = new EventEmitter<{id: number, newStatus: string}>();

  constructor() { }

  ngOnInit() {
  }

  public onSetTo(status: string) {
    this.statusChanged.emit({
      id: this.id,
      newStatus: status
    });
    console.log('A server status changed, new status: ' + status);
  }
}

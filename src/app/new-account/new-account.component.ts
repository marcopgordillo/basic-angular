import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountModel} from "../models/account.model";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @Output()
  private accountAdded: EventEmitter<AccountModel> = new EventEmitter<AccountModel>();

  constructor() { }

  ngOnInit() {
  }

  public onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    console.log('A server status changed, new status: ' + accountStatus);
  }

}

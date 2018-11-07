import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountModel} from '../models/account.model';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @Output()
  private accountAdded: EventEmitter<AccountModel> = new EventEmitter<AccountModel>();

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  public onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    this.loggingService.logStatusChanged(accountStatus);
  }

}

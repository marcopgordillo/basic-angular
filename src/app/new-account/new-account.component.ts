import {Component, OnInit} from '@angular/core';
import {AccountModel} from '../models/account.model';
import {LoggingService} from '../services/logging.service';
import {AccountsService} from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ngOnInit() {
  }

  public onCreateAccount(accountName: string, accountStatus: string) {

    this.accountsService.addAccount(new AccountModel(accountName, accountStatus));

    // this.loggingService.logStatusChanged(accountStatus);
  }

}

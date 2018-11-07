import {Component, Input, OnInit} from '@angular/core';
import {AccountModel} from '../models/account.model';
import {LoggingService} from '../services/logging.service';
import {AccountsService} from '../services/accounts.service';

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

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ngOnInit() {
  }

  public onSetTo(status: string) {

    this.accountsService.updateStatus(this.id, status);

    // this.loggingService.logStatusChanged(status);

    this.accountsService.statusUpdated.emit(status);
  }
}

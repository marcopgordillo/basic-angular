import {EventEmitter, Injectable} from '@angular/core';
import {AccountModel} from '../models/account.model';
import {LoggingService} from './logging.service';

@Injectable()
export class AccountsService {

  private _accounts: AccountModel[] = [
    new AccountModel('Master Account', 'active'),
    new AccountModel('Test Account', 'inactive'),
    new AccountModel('Hidden Account', 'unknown')
  ];

  private _statusUpdated: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public get accounts(): AccountModel[] {
    return this._accounts;
  }

  public get statusUpdated(): EventEmitter<string> {
    return this._statusUpdated;
  }

  public set statusUpdated(statusUpdated: EventEmitter<string>) {
    this._statusUpdated = statusUpdated;
  }

  public addAccount(account: AccountModel): void {
    this._accounts.push(account);
    LoggingService.logStatusChanged(account.status);
  }

  public updateStatus(id: number, newStatus: string) {
    this._accounts[id].status = newStatus;
    LoggingService.logStatusChanged(newStatus);
  }
}

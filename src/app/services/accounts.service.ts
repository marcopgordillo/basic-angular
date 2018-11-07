import {Injectable} from '@angular/core';
import {AccountModel} from '../models/account.model';

@Injectable()
export class AccountsService {

  private _accounts: AccountModel[] = [
    new AccountModel('Master Account', 'active'),
    new AccountModel('Test Account', 'inactive'),
    new AccountModel('Hidden Account', 'unknown')
  ];

  constructor() { }

  public get accounts(): AccountModel[] {
    return this._accounts;
  }

  public addAccount(account: AccountModel): void {
    this._accounts.push(account);
  }

  public updateStatus(id: number, newStatus: string) {
    this._accounts[id].status = newStatus;
  }
}

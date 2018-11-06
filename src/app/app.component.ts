import {Component} from '@angular/core';
import {AccountModel} from "./models/account.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private accounts: AccountModel[] = [
    {name: 'Master Account', status: 'active'},
    {name: 'Test Account', status: 'inactive'},
    {name: 'Hidden Account', status: 'unknown'}
  ];

  public onAccountAdded(newAccount: AccountModel): void {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}

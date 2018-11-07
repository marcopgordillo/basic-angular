import {EventEmitter, Injectable} from '@angular/core';

import {UserModel} from '../models/user.model';
import {LoggingService} from './logging.service';
import {CounterService} from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: UserModel[] = [
    new UserModel(0, 'Max', 'active'),
    new UserModel(1, 'Anna', 'active'),
    new UserModel(2, 'Chris', 'inactive'),
    new UserModel(3, 'Manu', 'inactive')
  ];

  private _statusUpdated: EventEmitter<UserModel[]> = new EventEmitter<UserModel[]>();

  constructor(private counterService: CounterService) {}

  public get usersUpdated(): EventEmitter<UserModel[]> {
    return this._statusUpdated;
  }

  public set usersUpdated(statusUpdated: EventEmitter<UserModel[]>) {
    this._statusUpdated = statusUpdated;
  }

  public get users(): UserModel[] {
    return this._users;
  }

  public set users(users: UserModel[]) {
    this._users = users;
  }

  onSetToInactive(id: number) {
    this._users[id].status = 'inactive';
    this._statusUpdated.emit(this._users);
    LoggingService.print('Status Changed to: ', 'inactive');
    this.counterService.incrementActiveToInactive();
  }

  onSetToActive(id: number) {
    this._users[id].status = 'active';
    this._statusUpdated.emit(this._users);
    LoggingService.print('Status Changed to: ', 'active');
    this.counterService.incrementInactiveToActive();
  }
}

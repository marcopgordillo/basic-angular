import {Injectable} from '@angular/core';

import {UserModel} from '../models/user.model';
import {LoggingService} from './logging.service';

@Injectable()
export class UserService {

  private _users: UserModel[] = [
    new UserModel('Max', 'active'),
    new UserModel('Anna', 'active'),
    new UserModel('Chris', 'inactive'),
    new UserModel('Manu', 'inactive')
  ];

  public get users(): UserModel[] {
    return this._users;
  }

  public set users(users: UserModel[]) {
    this._users = users;
  }

  onSetToInactive(id: number) {
    this._users[id].status = 'inactive';
    LoggingService.changeStatus('inactive');
  }

  onSetToActive(id: number) {
    this._users[id].status = 'active';
    LoggingService.changeStatus('active');
  }
}

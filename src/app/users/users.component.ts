import {Component} from '@angular/core';
import {UserModel} from './user/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    new UserModel(1, 'Max'),
    new UserModel(2, 'Anna'),
    new UserModel(3, 'Chris')
  ];
}

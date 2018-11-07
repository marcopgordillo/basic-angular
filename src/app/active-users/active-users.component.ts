import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  private users: UserModel[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
  }
}

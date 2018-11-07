import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{

  private users: UserModel[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}

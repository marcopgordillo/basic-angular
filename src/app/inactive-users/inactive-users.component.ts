import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit, OnDestroy {

  private users: UserModel[];
  private usersObservable: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users.filter(user => user.status === 'inactive');

    this.usersObservable = this.userService.usersUpdated.subscribe(users => {
      this.users = users.filter(user => user.status === 'inactive');
    });
  }

  ngOnDestroy(): void {
    this.usersObservable.unsubscribe();
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}

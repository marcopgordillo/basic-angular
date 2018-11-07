import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit, OnDestroy {

  private users: UserModel[];
  private usersObservable: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users.filter(user => user.status === 'active');

    this.usersObservable = this.userService.usersUpdated.subscribe(users => {
      this.users = users.filter(user => user.status === 'active');
    });
  }

  ngOnDestroy(): void {
    this.usersObservable.unsubscribe();
  }

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
  }
}

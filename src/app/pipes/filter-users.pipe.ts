import {Pipe, PipeTransform} from '@angular/core';
import {UserModel} from '../models/user.model';

@Pipe({name: 'filterUsers'})
export class FilterUsersPipe implements PipeTransform {
  transform(users: UserModel[], status: string) {
    return users.filter(user => user.status === status);
  }
}

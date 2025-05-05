import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({ providedIn: 'root' })
export class FilteredUsersService {
  private filteredUsers: User[] = [];

  setFilteredUsers(users: User[]) {
    this.filteredUsers = users;
  }

  getSnapshot(): User[] {
    return this.filteredUsers;
  }
}
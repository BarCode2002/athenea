import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './users.service';

@Injectable({ providedIn: 'root' })
export class FilteredUsersService {
  private filteredUsersSubject = new BehaviorSubject<User[]>([]);
  filteredUsers$ = this.filteredUsersSubject.asObservable();

  setFilteredUsers(users: User[]) {
    this.filteredUsersSubject.next(users);
  }

  getSnapshot(): User[] {
    return this.filteredUsersSubject.value;
  }
}

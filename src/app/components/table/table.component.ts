import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService, User } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FilteredUsersService } from '../../services/filtered-users.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() users: User[] = [];
  @Input() totalUsers: number = 0;

  currentPage: number = 1;
  usersPerPage: number = 10;

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  showSearch = true;

  inputName: string = '';
  inputSurname: string = '';
  inputEmail: string = '';
  inputId: string = '';

  constructor(
    private router: Router,
    private filteredUsersService: FilteredUsersService
  ) {}

  eraseAllInputs() {
    this.inputName = '';
    this.inputSurname = '';
    this.inputEmail = '';
    this.inputId = '';
  }

  get totalPages(): number {
    return Math.ceil(this.totalUsers / this.usersPerPage);
  }

  sort(column: keyof User): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.users.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  getFilteredUsers(): User[] {
    const filtered = this.users.filter(user => 
      user.name.toLowerCase().includes(this.inputName.toLowerCase()) &&
      user.surname.toLowerCase().includes(this.inputSurname.toLowerCase()) &&
      user.email.toLowerCase().includes(this.inputEmail.toLowerCase()) &&
      user.id.toLowerCase().includes(this.inputId.toLowerCase())
    );
    this.filteredUsersService.setFilteredUsers(filtered);
    return filtered;
  }

  getUsersForCurrentPage(): User[] {
    const startIndex = (this.currentPage - 1) * this.usersPerPage;
    const endIndex = startIndex + this.usersPerPage;
    const filteredUsers = this.getFilteredUsers();
    this.totalUsers = filteredUsers.length;
    return filteredUsers.slice(startIndex, endIndex);
  }

  goToProfile(userId: string): void {
    this.router.navigate(['/profile', userId]);
  }

  next() {
    if (this.currentPage * this.usersPerPage < this.totalUsers) {
      this.currentPage++;
    }
  }
  previous() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}

import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { User, UserService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  users: User[] = [];
  currentPage: number = 1;
  usersPerPage: number = 10;
  totalUsers: number = 0;

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  inputName: string = '';
  inputSurname: string = '';
  inputEmail: string = '';
  inputId: string = '';

  eraseAllInputs() {
    this.inputName = '';
    this.inputSurname = '';
    this.inputEmail = '';
    this.inputId = '';
  }

  eraseInput(inputToDelete: string) {
    switch (inputToDelete) {
      case 'name':
        this.inputName = ''; 
        break;
      case 'surname':
        this.inputSurname = '';
        break;
      case 'email':
        this.inputEmail = '';
        break;
      case 'id':
        this.inputId = '';
        break;
      default:
        console.error('Invalid input field');
    }
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

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.totalUsers = this.users.length;
  }

  getFilteredUsers(): User[] {
    return this.users.filter(user => 
      user.name.toLocaleLowerCase().includes(this.inputName.toLocaleLowerCase()) &&
      user.surname.toLocaleLowerCase().includes(this.inputSurname.toLocaleLowerCase()) &&
      user.email.toLocaleLowerCase().includes(this.inputEmail.toLocaleLowerCase()) &&
      user.id.toLocaleLowerCase().includes(this.inputId.toLocaleLowerCase())
    );
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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/users.service';
import { User } from '../../interfaces/user';

@Component({
    selector: 'app-newUser',
    imports: [CommonModule, FormsModule],
    templateUrl: './newUser.component.html',
    styleUrls: ['./newUser.component.css']
})
export class NewUserComponent {

  constructor(
      private userService: UserService
  ) {}

  showModal = false;

  newUser: User = {
    name: '',
    surname: '',
    email: '',
    id: ''
  };

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.resetForm();
  }

  error = '';

  async submitForm() {
    console.log('New User:', this.newUser);
    const response = await this.userService.addUser(this.newUser);
    if (response.code !== 201) this.error = response.message
    else this.closeModal();
  }

  resetForm() {
    this.newUser = { name: '', surname: '', email: '', id: '' };
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../../services/users.service';

@Component({
  selector: 'app-newUser',
  standalone: true,
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

  submitForm() {
    console.log('New User:', this.newUser);
    this.userService.addUser(this.newUser);
    this.closeModal();
  }

  resetForm() {
    this.newUser = { name: '', surname: '', email: '', id: '' };
  }

}

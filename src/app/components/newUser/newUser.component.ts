import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newUser',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newUser.component.html',
  styleUrls: ['./newUser.component.css']
})
export class NewUserComponent {
  showModal = false;

  newUser = {
    nom: '',
    cognom: '',
    email: '',
    dni: ''
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
    // TODO: send data to backend
    this.closeModal();
  }

  resetForm() {
    this.newUser = { nom: '', cognom: '', email: '', dni: '' };
  }

}

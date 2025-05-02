import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  welcomeMessage = 'Welcome to My Angular App';
  
  constructor(private router: Router) {}
  
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
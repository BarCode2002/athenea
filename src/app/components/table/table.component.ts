import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface User {
  name: string;
  surname: string;
  email: string;
  id: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private router: Router) {}

  users: User[] = [];

  ngOnInit(): void {
    this.users = [
      {
        "name": "Jhon",
        "surname": "Doe",
        "email": "jhon.doe@email.com",
        "id": "4782938L"
      },
      {
        "name": "Alice",
        "surname": "Combs",
        "email": "alice.combs@email.com",
        "id": "4749204T"
      },
      {
        "name": "Grace",
        "surname": "Hawkins",
        "email": "grace.hawkins@email.com",
        "id": "5671938K"
      },
      {
        "name": "Wayne",
        "surname": "Stuart",
        "email": "wayne.stuart@email.com",
        "id": "9022108P"
      },
      {
        "name": "Juan",
        "surname": "Spence",
        "email": "juan.spence@email.com",
        "id": "4321165C"
      },
      {
        "name": "Ronan",
        "surname": "Orozco",
        "email": "ronan.orozco@email.com",
        "id": "6738145E"
      },
      {
        "name": "Sylvia",
        "surname": "Vega",
        "email": "sylvia.vega@email.com",
        "id": "2031145J"
      }
    ];
  }

  goToProfile(userId: string): void {
    this.router.navigate(['/profile', userId]);
  }

}

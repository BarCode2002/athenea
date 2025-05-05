import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/users.service';
import { TopNavBarComponent } from '../../components/topNavBar/topNavBar.component';
import { User } from '../../interfaces/user';

@Component({
    imports: [
      CommonModule,
      TableComponent,
      TopNavBarComponent,
    ],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private userService: UserService
  ) {}

  users: User[] = [];
  totalUsers: number = 0;
  usersSubscription!: Subscription;

  ngOnInit(): void {
    this.usersSubscription = this.userService.users$.subscribe(users => {
      this.users = users;
      this.totalUsers = this.users.length;
    });
  }

  ngOnDestroy(): void {
    this.usersSubscription?.unsubscribe();
  }  
}



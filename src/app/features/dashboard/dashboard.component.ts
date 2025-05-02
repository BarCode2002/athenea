import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';
import { NewUserComponent } from '../../components/newUser/newUser.component';

@Component({
  standalone: true,
  imports: [CommonModule, TableComponent, NewUserComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


}

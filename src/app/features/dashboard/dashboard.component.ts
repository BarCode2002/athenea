import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';
import { NewUserComponent } from '../../components/newUser/newUser.component';
import { ExportTableComponent } from '../../components/exportTable/exportTable.component';
import { ImportTableComponent } from '../../components/importTable/importTable.component';

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    TableComponent, 
    NewUserComponent, 
    ExportTableComponent,
    ImportTableComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


}

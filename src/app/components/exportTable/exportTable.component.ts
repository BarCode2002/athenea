import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/users.service';
import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable';

@Component({
  selector: 'app-exportTable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exportTable.component.html',
  styleUrls: ['./exportTable.component.css']
})
export class ExportTableComponent {

  constructor(
      private userService: UserService
  ) {}

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  exportPDF() {
    const table = this.userService.getUsers();
    const doc = new jsPDF();
    const head = [['Nom', 'Cognom', 'Email', 'DNI']];
    const data = table.map(user => [user.name, user.surname, user.email, user.id]);
    autoTable(doc, {
      head: head,
      body: data,
      startY: 20,
      theme: 'striped'
    });
    doc.save('users.pdf');
    this.showModal = false;
  }

  exportCSV() {
    const header = ['Nom', 'Cognom', 'Email', 'DNI'];
    const table = this.userService.getUsers();
    const rows = table.map(user => [user.name, user.surname, user.email, user.id]);
      const csvContent = [header, ...rows]
      .map(row => row.map(item => `"${item}"`).join(','))
      .join('\r\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'users.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.showModal = false;
  }

  exportJSON(): void {
    const dataStr = JSON.stringify(this.userService.getUsers(), null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `users-${new Date().toISOString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

}
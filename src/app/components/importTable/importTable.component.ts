import { CommonModule } from "@angular/common";
import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { User, UserService } from "../../services/users.service";

@Component({
    selector: 'app-importTable',
    imports: [CommonModule],
    templateUrl: './importTable.component.html',
  })
export class ImportTableComponent {
  @Input() mode: string = '';

  constructor(
      private userService: UserService
  ) {}

  performModeAction(users: User[]) {
    if (this.mode === 'table') this.userService.replaceAllUsers(users);
    else this.userService.addUsers(users);
  }

  validateUsers(data: any[]): boolean {
    const requiredKeys = ['name', 'surname', 'email', 'id'];
    for (const user of data) {
      const keys = Object.keys(user);
      if (keys.length !== requiredKeys.length || !keys.every(k => requiredKeys.includes(k))) {
        return false;
      }
      for (const key of ['name', 'surname', 'email', 'id']) {
        if (typeof user[key] !== 'string') {
          return false;
        }
      }
    }
    return true;
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (!file) return;
    const fileName = file.name.toLowerCase();
      if (fileName.endsWith('.json')) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          try {
            const users = JSON.parse(reader.result);
            if (Array.isArray(users) && this.validateUsers(users)) {
              this.performModeAction(users);
            } else {
              console.error('Invalid JSON format');
            }
          } catch (err) {
            console.error('Error parsing JSON:', err);
          }
        } else {
          console.error('Error: content File is not a string');
        }
      };
      reader.readAsText(file);
    } else if (fileName.endsWith('.csv')) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const csv = reader.result.trim();
          const lines = csv.split('\n');
          const users = lines.map(line => {
            const [name, surname, email, id] = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
            return { name, surname, email, id };
          });
          if (this.validateUsers(users)) {
            this.performModeAction(users);
          } else {
            console.error('Invalid CSV row data');
          }
        } else {
          console.error('Error: File content is not a string');
        }
      };
      reader.readAsText(file);
    } else {
      console.error('Unsupported file type');
    }
  }
}
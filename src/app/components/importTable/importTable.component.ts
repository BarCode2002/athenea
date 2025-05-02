import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-importTable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './importTable.component.html',
  styleUrls: ['./importTable.component.css']
})
export class ImportTableComponent {

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  validateUsers(data: any[]): boolean {
    const requiredKeys = ['name', 'surname', 'email', 'id'];
  
    return data.every(user => {
      if (typeof user !== 'object' || user === null) return false;
  
      const keys = Object.keys(user);
      const hasOnlyRequiredKeys = keys.length === requiredKeys.length &&
        requiredKeys.every(k => keys.includes(k));
  
      const hasValidTypes =
        typeof user.name === 'string' &&
        typeof user.surname === 'string' &&
        typeof user.email === 'string' &&
        typeof user.id === 'string';
  
      return hasOnlyRequiredKeys && hasValidTypes;
    });
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
  
    if (!file) return;
  
    const fileName = file.name.toLowerCase();
  
    if (fileName.endsWith('.json')) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result as string);
          if (Array.isArray(data) && this.validateUsers(data)) {
            console.log('Valid JSON:', data);
          } else {
            console.error('Invalid JSON format');
          }
        } catch (err) {
          console.error('Error parsing JSON:', err);
        }
      };
      reader.readAsText(file);
    } else if (fileName.endsWith('.csv')) {
      const reader = new FileReader();
      reader.onload = () => {
        const csv = reader.result as string;
        const lines = csv.trim().split('\n');
  
        const users = lines.map(line => {
          const [name, surname, email, id] = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
          return { name, surname, email, id };
        });
  
        if (this.validateUsers(users)) {
          console.log('Valid CSV data:', users);
        } else {
          console.error('Invalid CSV row data');
        }
      };
      reader.readAsText(file);
    } else {
      console.error('Unsupported file type');
    }
  }

}

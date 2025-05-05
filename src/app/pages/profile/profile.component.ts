import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    imports: [CommonModule],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  user: User | undefined;
  
  async deleteUser() {
    await this.userService.deleteUser(this.user!);
    this.router.navigate(['/dashboard']);
  }

  async ngOnInit(): Promise<void> {
    const userId = this.route.snapshot.paramMap.get('userId')!;
    this.user = await this.userService.getUserById(userId);
  }

}

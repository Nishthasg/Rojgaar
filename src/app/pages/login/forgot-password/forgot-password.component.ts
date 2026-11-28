import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email: string = '';
  constructor(private authService: AuthService) { }
  sendResetLink() {
    console.log('Sending reset link to:', this.email);
    this.authService.sendResetLink(this.email).subscribe({
      next: (response: any) => {
        console.log(response);
        alert('Password reset link sent successfully.');
      },
      error: (error) => {
        console.log(error.error);
        alert(error.error?.message || 'Failed to send password reset link');
      }
    });
  }
}

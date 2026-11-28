import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
 password = new FormGroup({
   newpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(6)])
 }) 
  token: string;
 constructor(private authService: AuthService, private router: Router,  private route: ActivatedRoute,) {
  this.token = this.route.snapshot.paramMap.get('token') || '';
  }
 resetPassword(){
  if(this.password.value.newpassword !== this.password.value.confirmpassword){
    alert('Please enter the same password in both fields.');
    console.log('Passwords do not match');
  } else{
    this.authService.resetPassword(this.token, this.password.value.newpassword || '').subscribe({
      next: (response: any) =>{
        console.log("Password reset successful", response);
        alert('Password reset successful. Please log in with your new password.');
        this.router.navigate(['/login']);
      }, error: (error) =>{
        console.log("Error resetting password", error);
      }
    })
  }
 }
}

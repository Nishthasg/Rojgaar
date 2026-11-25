import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  userForm = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  phone: new FormControl('', Validators.required),
  password: new FormControl('', [Validators.required, Validators.minLength(6)])
});
showPassword:boolean  = false;
  constructor(private router: Router, private authservice: AuthService){};
   togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(){
  //   if(this.userForm.valid){
  //     console.log(this.userForm.value);
  //   window.alert("Register successfully!");
  //    this.router.navigate(['/home']);
  //   }
  //   else{
  //     this.userForm.markAllAsTouched();
  //   }
  // }
    if (this.userForm.valid) {

      const userData = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        phone: this.userForm.value.phone,
        password: this.userForm.value.password,
        role: 'worker'
      };
      
      this.authservice.register(userData).subscribe({
        next: (response) => {
          console.log(response);
          alert("Register Successfully!");
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error(error);
          alert(error.error?.message || 'Registration failed. Please try again.');
        }
      });
    } else {

      this.userForm.markAllAsTouched();

    }
  }
}
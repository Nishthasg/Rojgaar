import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 loginForm = new FormGroup({
  username: new FormControl('',[Validators.required]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)])
 });
 constructor(private router:Router, private authservice: AuthService){};

 onSubmit(){
  if(this.loginForm.valid){
    const loginData = {
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.authservice.login(loginData).subscribe({
      next: (response:any) =>{
        console.log(response);
        alert("Login Successfully.");
        localStorage.setItem('token',response.token);
        this.router.navigate(['/home']);
      },
      error: (error) =>{
        console.log(error.error);
        alert(error.error?.message || 'Login failed');
      }
    });
  }
  else{
    this.loginForm.markAllAsTouched();
  }
 }

}

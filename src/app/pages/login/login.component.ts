import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
 constructor(private router:Router){};

 onSubmit(){
  if(this.loginForm.valid){
    alert("Login successfully!");
    console.log(this.loginForm.value);
    this.router.navigate(['/home']);
  }
  else{
    this.loginForm.markAllAsTouched();
    console.log("error");
  }
 }

}

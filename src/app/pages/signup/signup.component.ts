import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required]),
    skill: new FormControl('', Validators.required),
    experience: new FormControl('',[Validators.required]),
    address: new FormControl('', [Validators.required]),
    work: new FormControl(''),
  });

  onSubmit(){
    console.log(this.userForm.value);
  }
}
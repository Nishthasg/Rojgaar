import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-register',
  templateUrl: './worker-register.component.html',
  styleUrls: ['./worker-register.component.scss']
})
export class WorkerRegisterComponent {
  workerForm = new FormGroup({
  category: new FormControl("", Validators.required),
  profileImage: new FormControl("", Validators.required),
  availability: new FormControl(''),
  hourlyRate: new FormControl('', Validators.required),
  state: new FormControl('', Validators.required),
  city: new FormControl('', Validators.required),
  skills: new FormControl('', Validators.required),
  experience: new FormControl('', Validators.required), 
  })
   
  constructor(private _WS: WorkerService){}
  onSubmit(){
   if(this.workerForm.valid){
     this._WS.registerWorker(this.workerForm.value).subscribe({
      next: (response) =>{
        console.log(response);
        alert("Registered Successfully.");
      }, error:(error) =>{
        console.error(error);
        alert(error.error.message);
      }
     });
   }else {
       this.workerForm.markAllAsTouched();
   }
  }
}

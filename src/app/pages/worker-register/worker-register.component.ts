import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  // skills: new FormControl('', Validators.required),
  experience: new FormControl('', Validators.required), 
  bio: new FormControl('', Validators.required)
  })
   
skills: string[] = [];
skillInput: string = '';
skillTouched: boolean = false;
categories: any[] = [];
states: any[] = [];
cities: any[] = [];

  constructor(private _WS: WorkerService, private router: Router){}

  ngOnInit() {
    this._WS.getCategories().subscribe({
      next: (response: any) =>{
        console.log('Categories:', response);
        this.categories = response.data;
      }, error: (error) =>{
        console.error('Error fetching categories:', error);
      }
    });

    this._WS.getStates().subscribe({
      next: (response: any) =>{
        console.log('States:', response);
         this.states = response.data;
      }, error: (error) =>{
        console.error('Error fetching states:', error);
      }
    })
  }
  onStateChange(event: any) {
   const selectedState = event.target.value;
   console.log('Selected State:', selectedState);
  //  this.cities = [];
   this.workerForm.patchValue({
        city: ''
    });

    if (!selectedState) {
        return;
    }

    this._WS.getCityByState(selectedState).subscribe({
      next: (response: any) =>{
        this.cities = response.data;
      }, error: (error) =>{
        console.error('Error fetching cities:', error);
      }
    });

  }
  
  onSubmit(){
   if(this.workerForm.valid){
    const workerData = {
      ...this.workerForm.value,
      skills: this.skills
    };
     this._WS.registerWorker(workerData).subscribe({
      next: (response) =>{
        console.log(response);
        alert("Registered Successfully.");
      }, error:(error) =>{
        console.error(error);
        alert(error.error.message);
      }
     });
     this.router.navigate(['/home']);
   }else {
       this.workerForm.markAllAsTouched();
   }
  }
  addSkill() {

  const skill = this.skillInput.trim();

  if (!skill) {
    return;
  }

  // Avoid duplicate skills
  if (!this.skills.includes(skill)) {
    this.skills.push(skill);
  }

  this.skillInput = '';
  this.skillTouched = true;

  console.log('Skills:', this.skills);
}
removeSkill(index: number) {
  this.skills.splice(index, 1);
}
}

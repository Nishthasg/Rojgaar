import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkerService } from 'src/app/services/worker.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  HighRatedWorker:any[] = [];
  workerList: any[] = [];
  constructor(private router:Router, private workerService: WorkerService){}
  
  ngOnInit(){
     this.workerService.getWorkers().subscribe(
      (response: any) =>{
        this.workerList = response.data;
        console.log('Workers fetched successfully:', this.workerList);
        this.HighRatedWorker = this.workerList.sort((a,b)=>{
      return b.experience - a.experience;
    })
      }, (error: any) =>{
        console.error('Error fetching workers:', error);
      }
    );
    // this.HighRatedWorker = this.workerList.sort((a,b)=>{
    //   return b.rating - a.rating;
    // })
    //console.log('High Rated Workers:', this.HighRatedWorker);
  }

  search(service:String, location:String){
    if (!service || service.trim() === '') {
    alert('Service is required');
    return; 
  }
    this.router.navigate(['./workers'], {
      queryParams: {
       service:service,
       location:location,
      }
    });
  }
viewProfile(id:number){
  this.router.navigate(['/workers/detail',id]);
}
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  HighRatedWorker:any[] = [];
  workerList: any[] = [];
  constructor(private router:Router, private DS:DataService){}
  
  ngOnInit(){
    this.workerList = this.DS.getWorkers();
    this.HighRatedWorker = this.workerList.sort((a,b)=>{
      return b.rating - a.rating;
    })
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
  this.router.navigate(['/details'],{
    queryParams :{id:id}
  })
}
}

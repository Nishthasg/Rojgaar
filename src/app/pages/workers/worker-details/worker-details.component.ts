import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.scss']
})
export class WorkerDetailsComponent {
  selectedDate: string = '';
  selectedSlot: any = null;
  workerList:any[] = [];
  worker:any;
  noOfStar:number = 0;
  star:any[] = [];
  
  constructor(private dataservice:DataService, private route:ActivatedRoute ){}
  
  ngOnInit(){
    this.workerList = this.dataservice.getWorkers();
    
    this.route.queryParams.subscribe(params =>{
      const workerId = Number(params['id']);
      this.worker = this.workerList.find(w=> w.id === workerId);
      console.log(this.worker);
    })
    this.noOfStar = Math.floor(this.worker.rating);
    this.star = Array(this.noOfStar).fill(0);
  }
 ratings = [
    { star: 5, count: 70, percentage: 70 },
    { star: 4, count: 25, percentage: 25 },
    { star: 3, count: 15, percentage: 15 },
    { star: 2, count: 0, percentage: 0 },
    { star: 1, count: 0, percentage: 0 }
  ];
 
  timeSlots = [
    { time: '09:00 AM', disabled: false },
    { time: '10:00 AM', disabled: false },
    { time: '11:00 AM', disabled: true },
    { time: '12:00 PM', disabled: false },
    { time: '01:00 PM', disabled: true },
    { time: '02:00 PM', disabled: false },
    { time: '03:00 PM', disabled: false },
  ];

  selectSlot(slot: any) {
    if (slot.disabled) return;
    this.selectedSlot = slot;
  }
}

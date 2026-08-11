import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { WorkerService } from 'src/app/services/worker.service';

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
  
  constructor(private route:ActivatedRoute, private workerService: WorkerService){}
  
ngOnInit() {

  this.route.paramMap.subscribe(params => {

    const workerId = params.get('id');

    console.log('Worker ID:', workerId);

    if (workerId) {
      this.workerService.getWorkerById(workerId).subscribe({
        next: (response: any) => {
          console.log('Worker:', response);
          this.worker = response.data;
        },
        error: (error) => {
          console.error('Error fetching worker:', error);
        }
      });
    }

  });

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

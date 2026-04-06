import { Component } from '@angular/core';

@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.scss']
})
export class WorkerDetailsComponent {
 ratings = [
    { star: 5, count: 70, percentage: 70 },
    { star: 4, count: 25, percentage: 25 },
    { star: 3, count: 15, percentage: 15 },
    { star: 2, count: 0, percentage: 0 },
    { star: 1, count: 0, percentage: 0 }
  ];
}

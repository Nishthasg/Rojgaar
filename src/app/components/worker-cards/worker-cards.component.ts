import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-worker-cards',
  templateUrl: './worker-cards.component.html',
  styleUrls: ['./worker-cards.component.scss']
})
export class WorkerCardsComponent {
  @Input() worker:any;

  constructor(private router:Router){}
  viewProfile(id:number){
   this.router.navigate(['/details'],{
    queryParams: {
      id:id
    }
   })
  }
}

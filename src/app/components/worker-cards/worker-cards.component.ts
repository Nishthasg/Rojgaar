import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-worker-cards',
  templateUrl: './worker-cards.component.html',
  styleUrls: ['./worker-cards.component.scss']
})
export class WorkerCardsComponent {
  @Input() worker:any;
}

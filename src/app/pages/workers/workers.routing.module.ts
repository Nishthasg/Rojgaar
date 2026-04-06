import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersComponent } from './workers.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';

const routes: Routes = [
  {
    path: '',
    component: WorkersComponent
  },
  {
    path: 'details',
    component: WorkerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRoutingModule {}
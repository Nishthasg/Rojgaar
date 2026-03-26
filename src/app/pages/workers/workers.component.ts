import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { WorkerCardsComponent } from 'src/app/components/worker-cards/worker-cards.component';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
})
export class WorkersComponent {
 openShortby = false;
 shortby:String = "Most Experience";
 workerList: any[] = [];
//  workerList = [
//   {
//     name:'Ramesh Kumar',
//     profession:'Painter',
//     address:'Andheri East, Mumbai',
//     desc:'Expert in interior and exterior house painting. Fast and clean work with quality materials.',
//     skills:['Wall Painting', 'Water Proofing'],
//     experience:'5 yrs',
//     rating:'4.8',
//   },
//   {
//     name:'Suresh Singh',
//     profession:'Plumber',
//     address:'Lajpat Nagar, Delhi',
//     desc:'All kinds of pipe fitting, motor repair, and leakage solutions. Available 24/7 for emergencies.',
//     skills:['Motor Repair', 'Pipe Fitting'],
//     experience:'8 yrs',
//     rating:'4.5',
//   },
//   {
//     name:'Amit Sharma',
//     profession:'Electrician',
//     address:'Koramangala, Delhi',
//     desc:'Certified electrician for home wiring, appliance installation, and fault finding.',
//     skills:['Fan Repair', 'House Wiring'],
//     experience:'3 yrs',
//     rating:'4.9',
//   },
//   {
//    name:'Manoj Tiwari',
//    profession:'Carpenter',
//     address:'Bandra, Mumbai',
//     desc:'Custom furniture, door repairs, and modular kitchen installation. Fine woodwork guaranteed.',
//     skills:['Door Repair', 'Furniture Making'],
//     experience:'12 yrs',
//     rating:'4.7',
//   },
//  ];
 

  constructor(private location: Location, private dataservice:DataService){

  }
  
  ngOnInit(){
    this.workerList = this.dataservice.getWorkers();
    console.log(this.dataservice.getWorkers());
  }
 goBack(){
  this.location.back();
 }
 showShortby(){
  this.openShortby = ! this.openShortby;
 }

 selectedFilter(option:String){
  this.shortby = option;
  this.openShortby = false;
 }
}

import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
 filteredList: any[] =[];
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
 

  constructor(private location: Location, private dataservice:DataService, private route: ActivatedRoute){

  }
  
  ngOnInit(){
    this.workerList = this.dataservice.getWorkers()
     this.filteredList = [...this.workerList];
    console.log("workerListworkerListworkerList",this.workerList);

   console.log()
    this.route.queryParams.subscribe( params =>{
    const service = params['service']?.toLowerCase() || '';
    const locations = params['location']?.toLowerCase() || '';
    this.filterbyParams(service,locations);
    console.log(params);
    });
  }

 goBack(){
  this.location.back();
 }

 showShortby(){
  this.openShortby = ! this.openShortby;
 }

filterbyParams(service:string ,locations:string){
   this.filteredList = this.workerList.filter(worker => {

    const matchesService =
      !service ||
      worker.profession?.toLowerCase().includes(service);

    const matchesLocation =
      !location ||
      worker.address?.toLowerCase().includes(location);

    return matchesService || matchesLocation;
  });
}

 selectedFilter(option:String){
  this.shortby = option;
  if(option === "Highest Rated"){
    this.filteredList = [...this.filteredList].sort((a,b)=>{
      return b.rating - a.rating;
    })
  }
  if(option === "Most Experience"){
    this.filteredList = [...this.filteredList].sort((a,b)=>{
      return b.experience - a.experience;
    })
  }
  this.openShortby = false;
 }

 //console.log(filteredList);
 onSearch(event:any){
  const value = event.target.value.toLowerCase();
  this.filteredList = this.workerList.filter(workerList=>{
   return workerList.name.toLowerCase().includes(value) || 
    workerList.profession.toLowerCase().includes(value)
  });
 }
 filterLocation(event:any){
  const value = event.target.value.toLowerCase();
  this.filteredList = this.workerList.filter(workerList=>{
   return workerList.address.toLowerCase().includes(value)
  });
 }
 filterCategory(event:any){
  const value = event.target.value.toLowerCase();
  this.filteredList = this.workerList.filter(worker =>{
 return worker.profession.toLowerCase().includes(value)
  });
 }
}

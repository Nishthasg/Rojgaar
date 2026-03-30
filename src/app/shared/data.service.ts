import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  workerList = [
  {
    name:'Ramesh Kumar',
    profession:'Painter',
    address:'Andheri East, Mumbai',
    desc:'Expert in interior and exterior house painting. Fast and clean work with quality materials.',
    skills:['Wall Painting', 'Water Proofing'],
    experience:'5',
    rating:'4.8',
  },
  {
    name:'Suresh Singh',
    profession:'Plumber',
    address:'Lajpat Nagar, Delhi',
    desc:'All kinds of pipe fitting, motor repair, and leakage solutions. Available 24/7 for emergencies.',
    skills:['Motor Repair', 'Pipe Fitting'],
    experience:'8',
    rating:'4.5',
  },
  {
    name:'Amit Sharma',
    profession:'Electrician',
    address:'Koramangala, Delhi',
    desc:'Certified electrician for home wiring, appliance installation, and fault finding.',
    skills:['Fan Repair', 'House Wiring'],
    experience:'3',
    rating:'4.9',
  },
  {
   name:'Manoj Tiwari',
   profession:'Carpenter',
    address:'Bandra, Mumbai',
    desc:'Custom furniture, door repairs, and modular kitchen installation. Fine woodwork guaranteed.',
    skills:['Door Repair', 'Furniture Making'],
    experience:'12',
    rating:'4.7',
  },
 ];

 getWorkers(){
  return this.workerList;
 }
}

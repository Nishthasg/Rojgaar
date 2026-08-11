import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkerCardsComponent } from 'src/app/components/worker-cards/worker-cards.component';
import { DataService } from 'src/app/shared/data.service';
import { WorkerService } from 'src/app/services/worker.service';

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
  selectedCategory: String = '';
  selectedLocation: String = '';
  searchText: String = '';

  constructor(
     private location: Location,
     private dataservice:DataService,
     private route: ActivatedRoute,
     private workerService:WorkerService)
     {}
  
  ngOnInit(){
    this.workerService.getWorkers().subscribe({

      next: (response: any) => {

        console.log('API Response:', response);

        // If backend response is { success, message, data }
        this.workerList = response.data;

        // Initially display all workers
        this.filteredList = [...this.workerList];

        console.log('workerList:', this.workerList);
        console.log('filteredList:', this.filteredList);

        // Apply URL query parameters AFTER API data arrives
        this.route.queryParams.subscribe(params => {

          const service =
            params['service']?.toLowerCase() || '';

          const location =
            params['location']?.toLowerCase() || '';

          this.selectedCategory = service;
          this.selectedLocation = location;

           this.applyFilters();

          console.log('Query Params:', params);
        });

      },

      error: (error) => {
        console.error('Error fetching workers:', error);
      }

    });
  }

 goBack(){
  this.location.back();
 }

 showShortby(){
  this.openShortby = ! this.openShortby;
 }
 applyFilters() {

    let result = [...this.workerList];

    // Search by name
    if (this.searchText) {
  result = result.filter(worker => {

    const name = worker.user?.name?.toLowerCase() || '';
    const category = worker.category?.toLowerCase() || '';
    const city = worker.city?.toLowerCase() || '';
    const state = worker.state?.toLowerCase() || '';

    const skills = Array.isArray(worker.skills)
      ? worker.skills.join(' ').toLowerCase()
      : '';

    return (
      name.includes(this.searchText) ||
      category.includes(this.searchText) ||
      skills.includes(this.searchText) ||
      city.includes(this.searchText) ||
      state.includes(this.searchText)
    );
  });
}

    // Filter by category/profession
    if (this.selectedCategory) {

      result = result.filter(worker =>
        worker.category
          ?.toLowerCase()
          .includes(this.selectedCategory)
      );
    }

    // Filter by location
    if (this.selectedLocation) {

      result = result.filter(worker =>
        worker.city
          ?.toLowerCase()
          .includes(this.selectedLocation)
      );
    }

    this.filteredList = result;

    // Apply current sorting
    this.applySorting();
  }

  /**
   * Search box
   */
  onSearch(event: any) {

    this.searchText =
      event.target.value.toLowerCase().trim();

    this.applyFilters();
  }

  /**
   * Location filter
   */
  filterLocation(event: any) {

    this.selectedLocation =
      event.target.value.toLowerCase().trim();

    this.applyFilters();
  }

  /**
   * Category filter
   */
  filterCategory(event: any) {

    this.selectedCategory =
      event.target.value.toLowerCase().trim();

    this.applyFilters();
  }

  /**
   * Sorting
   */
  selectedFilter(option: string) {

    this.shortby = option;

    this.applySorting();

    this.openShortby = false;
  }

  applySorting() {

    if (this.shortby === 'Highest Rated') {

      this.filteredList = [...this.filteredList].sort(
        (a, b) => (b.rating || 0) - (a.rating || 0)
      );

    } else if (this.shortby === 'Most Experience') {

      this.filteredList = [...this.filteredList].sort(
        (a, b) => (b.experience || 0) - (a.experience || 0)
      );
    }
  }

// filterbyParams(service:string ,locations:string){
//    this.filteredList = this.workerList.filter(worker => {

//     const matchesService =
//       !service ||
//       worker.profession?.toLowerCase().includes(service);

//     const matchesLocation =
//       !location ||
//       worker.address?.toLowerCase().includes(location);

//     return matchesService || matchesLocation;
//   });
// }

//  selectedFilter(option:String){
//   this.shortby = option;
//   if(option === "Highest Rated"){
//     this.filteredList = [...this.filteredList].sort((a,b)=>{
//       return b.rating - a.rating;
//     })
//   }
//   if(option === "Most Experience"){
//     this.filteredList = [...this.filteredList].sort((a,b)=>{
//       return b.experience - a.experience;
//     })
//   }
//   this.openShortby = false;
//  }

//  //console.log(filteredList);
//  onSearch(event:any){
//   const value = event.target.value.toLowerCase();
//   this.filteredList = this.workerList.filter(workerList=>{
//    return workerList.name.toLowerCase().includes(value) || 
//     workerList.profession.toLowerCase().includes(value)
//   });
//  }
//  filterLocation(event:any){
//   const value = event.target.value.toLowerCase();
//   this.filteredList = this.workerList.filter(workerList=>{
//    return workerList.address.toLowerCase().includes(value)
//   });
//  }
//  filterCategory(event:any){
//   const value = event.target.value.toLowerCase();
//   this.filteredList = this.workerList.filter(worker =>{
//  return worker.profession.toLowerCase().includes(value)
//   });
//  }
}

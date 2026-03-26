import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
})
export class WorkersComponent {
 openShortby = false;
 shortby:String = "Most Experience";
  constructor(private location: Location){

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

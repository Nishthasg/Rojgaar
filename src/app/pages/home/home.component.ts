import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router:Router){}

  search(service:String, location:String){
    this.router.navigate(['./workers'], {
      queryParams: {
       service:service,
       location:location,
      }
    });
  }
}

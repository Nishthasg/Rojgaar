import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rojgaar';
  showMainNavbar:boolean = false;

  constructor(private router:Router){
   this.router.events.subscribe(()=>{
    this.showMainNavbar = !['/register', '/'].includes(this.router.url);
   })
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   alreadyLoggedIn = localStorage.getItem('token') !== null;
 logout(){
  localStorage.removeItem('token');
  this.alreadyLoggedIn = false;
 }

}

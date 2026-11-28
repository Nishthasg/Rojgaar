import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

register(userData:any){
  return this.http.post(`${this.apiUrl}/auth/register`,userData);
  }

login(userData:any){
 return this.http.post(`${this.apiUrl}/auth/login`, userData);
}

getProfile(){
 return this.http.get(`${this.apiUrl}/auth/profile`);
}
sendResetLink(email: string){
  return this.http.post(`${this.apiUrl}/auth/forgot-password`, {email});
}
resetPassword(token: string, password: string){
  return this.http.post(`${this.apiUrl}/auth/reset-password`, {token,password});
}
}

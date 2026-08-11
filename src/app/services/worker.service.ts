import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
 private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

 registerWorker(workerData: any){
  const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post(
      `${this.apiUrl}/workers`,
      workerData,
      { headers }
    );
 }

 getWorkers(){
  return this.http.get(`${this.apiUrl}/workers`);
 }
 
 getWorkerById(id: string){
  return this.http.get(`${this.apiUrl}/workers/${id}`);
 }

 getCategories(){
  return this.http.get(`${this.apiUrl}/categories`);
 }

 getStates(){
  return this.http.get(`${this.apiUrl}/locations/states`);
 }
 
 getCityByState(stateId: string){
  return this.http.get(`${this.apiUrl}/locations/states/${stateId}/cities`);
 }
}

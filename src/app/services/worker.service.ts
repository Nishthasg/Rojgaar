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
}

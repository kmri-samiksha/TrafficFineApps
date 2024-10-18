import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrafficFine } from '../models/traffic-fine';

@Injectable({
  providedIn: 'root'
})
export class TrafficFineService {

  private apiUrl = 'https://localhost:7056/TrafficFine';//'https://localhost:5001/api/TrafficFine';

  constructor(private http: HttpClient) { }

  getFines(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getFine(id: number): Observable<TrafficFine> {
    return this.http.get<TrafficFine>(`${this.apiUrl}/${id}`);
  }

  createFine(fine: TrafficFine): Observable<TrafficFine> {
    return this.http.post<TrafficFine>(this.apiUrl, fine);
  }

  updateFine(fine: TrafficFine): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${fine.id}`, fine);
  }

  deleteFine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mission } from './mission';


@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private baseUrl = 'http://localhost:9093';

  constructor(private http: HttpClient) { }

  getMission(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/mission/find/${id}`);
  }

  public createMission(mission: Mission): Observable<Mission> {
    return this.http.post<Mission>(`${this.baseUrl}/mission/add/12`, mission);
  }

  updateMission(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/mission/update`, value);
  }

  deleteMission(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/mission/delete/${id}`, { responseType: 'text' });
  }

  getmissionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/mission/all`);
  }

}

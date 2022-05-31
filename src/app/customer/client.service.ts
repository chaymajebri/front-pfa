import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:9093';

  constructor(private http: HttpClient) { }

getClient(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/customer/find/${id}`);
}

createClient(client: Object): Observable<Object> {
  return this.http.post(`${this.baseUrl}/customer/add/`, client);
}
getClientList(): Observable<any> {
  return this.http.get(`${this.baseUrl}/customer/all`);
}
}

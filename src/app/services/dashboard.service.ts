import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getClientCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/clients/count`);
  }
}
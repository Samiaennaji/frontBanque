import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ✅ Only this
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
 private baseUrl = 'http://localhost:8098/employee_dashboard_back_war/api/employee';
  constructor(private http: HttpClient) {}

  getTotalClients(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/clients/count`);
  }

  getTotalAccounts(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/accounts/count`);
  }

  getAccountsPerMonth(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/accounts/monthly`);
  }
}

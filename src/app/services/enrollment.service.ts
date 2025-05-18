import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
 private baseUrl = 'http://localhost:8098/employee_dashboard_back_war/api/employee';

  constructor(private http: HttpClient) {}

  enroll(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/enroll`, data);
  }

  updateClient(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, data);
  }

  deleteClient(clientId: number): Observable<any> {
  return this.http.request('delete', `${this.baseUrl}/delete`, {
    body: { clientId }
  });

}

}

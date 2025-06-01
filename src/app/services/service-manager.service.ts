import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivateServicesRequest } from '../models/activate-services-request.model';
import { SuspendServicesRequest } from '../models/suspend-services-request.model';
import { environment } from '../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class ServiceManagerService {
  private baseUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  activateServices(data: ActivateServicesRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/clients/activer-services`, data);
  }

  suspendServices(clientId: string, data: SuspendServicesRequest): Observable<any> {
  return this.http.put(`${this.baseUrl}/clients/${clientId}/suspend-services`, data);
}

reactivateServices(clientId: string, services: string[]): Observable<any> {
  return this.http.put(`${this.baseUrl}/clients/${clientId}/reactivate-services`, services);
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientBasic } from '../models/client-basic.model';
import { ClientSummary } from '../models/client-summary.model';
import { ActivateServicesRequest } from '../models/activate-services-request.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private baseUrl = 'http://localhost:8098/employee_dashboard_back_war/api/employee';

  constructor(private http: HttpClient) {}

  // Liste simple (id + nom)
  getClientsBasic(): Observable<ClientBasic[]> {
    return this.http.get<ClientBasic[]>(`${this.baseUrl}/clients/basic`);
  }

   // Détails d’un seul client
  getClientDetails(id: number): Observable<ClientSummary> {
  return this.http.get<ClientSummary>(`${this.baseUrl}/clients/${id}`);
}

  // Liste complète (avec comptes + transactions)
getDetailedClients(): Observable<ClientSummary[]> {
  return this.http.get<ClientSummary[]>(`${this.baseUrl}/clients/detailed`);
}

// recherche qui filtre les clients par nom

searchClients(name: string): Observable<ClientBasic[]> {
  return this.http.get<ClientBasic[]>(`${this.baseUrl}/clients/search`, {
    params: { name }
  });
}


//Bouton Bloquer / Débloquer un client
toggleClientStatus(id: number): Observable<void> {
  return this.http.put<void>(`${this.baseUrl}/clients/${id}/status`, {});
}



activateServices(request: ActivateServicesRequest): Observable<void> {
  return this.http.post<void>(`${this.baseUrl}/clients/activer-services`, request);
}

suspendServices(id: number): Observable<void> {
  return this.http.put<void>(`${this.baseUrl}/clients/${id}/suspend-services`, {});
}

reactivateServices(id: number): Observable<void> {
  return this.http.put<void>(`${this.baseUrl}/clients/${id}/reactivate-services`, {});
}

}

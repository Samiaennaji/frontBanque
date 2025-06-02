import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientBasicDTO } from '../models/client-basic.model';
import { ClientSummaryDTO } from '../models/client-summary.model';
import { ClientUpdateRequest } from '../models/client-update-request.model';
import { environment } from '../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class ClientService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getBasicClients(): Observable<ClientBasicDTO[]> {
    return this.http.get<ClientBasicDTO[]>(`${this.baseUrl}/clients/basic`);
  }

  getAllClients(): Observable<ClientSummaryDTO[]> {
    return this.http.get<ClientSummaryDTO[]>(`${this.baseUrl}/clients/detailed`);
  }

  getClientById(id: string): Observable<ClientSummaryDTO> {
  return this.http.get<ClientSummaryDTO>(`${this.baseUrl}/clients/${id}`);
}


 searchClientsByName(name: string): Observable<ClientSummaryDTO[]> {
  return this.http.get<ClientSummaryDTO[]>(
    `${this.baseUrl}/clients/search?name=${encodeURIComponent(name)}`
  );
}




  createClient(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/enroll`, data);
  }

  updateClient(data: ClientUpdateRequest): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, data);
  }

  deleteClient(payload: { clientId: string; supervisorCode: string }): Observable<any> {
  return this.http.request('delete', `${this.baseUrl}/delete`, {
    body: payload
  });
}


  toggleClientStatus(clientId: string, compteBloque: boolean, documentsComplets: boolean): Observable<any> {
  return this.http.put(
    `${environment.apiBaseUrl}/clients/${clientId}/status`,
    null, // PUT sans body, car params sont dans l'URL
    {
      params: {
        compteBloque: compteBloque.toString(),
        documentsComplets: documentsComplets.toString()
      }
    }
  );
}

}
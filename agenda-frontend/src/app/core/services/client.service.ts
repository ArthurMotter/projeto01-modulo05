import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Page } from '../models/page.model';
import { Client } from '../models/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = environment.baseUrl + "/clients";

  constructor(private http: HttpClient) { }

  getClientsPage(clientNameFilter:string, page: number):Observable<Page<Client>>{
    let url = `${this.baseUrl}?name_like=${clientNameFilter}&_page=${page}&_limit=10&_sort=name`;
    return this.http.get<Page<Client>>(url);
  }

  getClientsWithNameContaining(clientNameFilter:string):Observable<Page<Client>>{
    let url = `${this.baseUrl}?name_like=${clientNameFilter}&_limit=10`;
    return this.http.get<Page<Client>>(url);
  }

  delete(client: Client):Observable<void>{
    let url = `${this.baseUrl}/${client.id}`;
    return this.http.delete<void>(url);
  }

  save(client: Client): Observable<void>{
    return this.http.post<void>(this.baseUrl,client);
  }

  getClientById(id: number): Observable<Client>{
    let url = `${this.baseUrl}/${id}`;
    return this.http.get<Client>(url);
  }

  update(client: Client): Observable<void>{
    let url = `${this.baseUrl}/${client.id}`;
    return this.http.put<void>(url,client);
  }

}

import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professional } from '../models/professional.model';
import { environment } from '../../../environments/environment';
import { Time } from '../../modules/schedule/components/time/models/time';

// Paginated interface
export interface Page<T> {
  content: T[];
  pageable: any;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: any;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

// --- backend DTO ---
export interface ProfessionalRequest {
  id?: number;
  name: string;
  phone: string;
  email: string;
  active: boolean;
  areaIds: number[];
}

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  baseUrl = environment.baseUrl + "/professionals";

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getProfissionais(
    page: number,
    size: number,
    name: string
  ): Observable<Page<Professional>> {

    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (name) {
      params = params.set('name', name);
    }

    return this.http.get<Page<Professional>>(this.baseUrl, { params });
  }

  // Handle both create and update
  save(data: ProfessionalRequest): Observable<Professional> {
    if (data.id) {
      // If an ID exists, it's an update (PUT)
      return this.http.put<Professional>(`${this.baseUrl}/${data.id}`, data);
    } else {
      // If no ID, it's a create (POST)
      return this.http.post<Professional>(this.baseUrl, data);
    }
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAvailableDays(professional: Professional, calendar: Date): Observable<number[]> {
    let month = calendar.getMonth() + 1;
    let year = calendar.getFullYear();
    let url = `${this.baseUrl}/${professional.id}/availability-days?year=${year}&month=${month}`;

    return this.http.get<number[]>(url);
}

  getAvailableTimes(professional: Professional, selectedDate: Date): Observable<Time[]> {
    let date = selectedDate;
    let url = `${this.baseUrl}/${professional.id}/availability-times?date=${this.datePipe.transform(date, 'yyyy-MM-dd')}`;

    return this.http.get<Time[]>(url);
  }
}
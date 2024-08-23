import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investment } from '../models/investment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private apiUrl = 'https://localhost:7265/api/Investment';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Investment[]> {
    return this.http.get<Investment[]>(this.apiUrl);
  }

  getById(id: number): Observable<Investment> {
    return this.http.get<Investment>(`${this.apiUrl}/${id}`);
  }

  create(investment: Investment): Observable<Investment> {
    return this.http.post<Investment>(this.apiUrl, investment);
  }

  update(id: number, investment: Investment): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, investment);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

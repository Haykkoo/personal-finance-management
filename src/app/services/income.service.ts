import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';

//import { Income } from '../models/income';
import {Income} from '../models/income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private apiUrl = 'https://localhost:7265/api/Income';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Income[]> {
    return this.http.get<Income[]>(this.apiUrl);
  }

  getById(id: number): Observable<Income> {
    return this.http.get<Income>(`${this.apiUrl}/${id}`);
  }

  create(income: Income): Observable<Income> {
    return this.http.post<Income>(this.apiUrl, income);
  }

  update(id: number, income: Income): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, income);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

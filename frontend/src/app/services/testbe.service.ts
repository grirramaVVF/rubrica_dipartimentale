import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestBeService {
  private apiUrl = 'http://localhost:5298/api/Auth/ParametroSede/GetLista'; // URL dell'API
  

  constructor(private http: HttpClient) {}

  // Metodo per ottenere i dati con il token
  getData2(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError) // Gestione errori
    );
  }

  // Metodo per gestire gli errori
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Errori del client (es. problemi di rete)
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Errori del server
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
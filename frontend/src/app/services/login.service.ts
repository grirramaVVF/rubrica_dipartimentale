
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

interface AuthResponse {
    token: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // private apiUrl = 'http://localhost:5298/api/Auth/'; // URL del server per l'autenticazione
    private apiUrl = environment.apiCreateToken;
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient, private router: Router) {
        // Verifica se l'utente è già loggato all'avvio dell'app
        this.isLoggedInSubject.next(!!this.getToken());
    }

    login(username: string, password: string): Observable<AuthResponse> {
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify({ username, password });
        console.log(body);
        //return this.http.post<AuthResponse>(this.apiUrl + 'people', body, { 'headers': headers })

        return this.http
            // .post<AuthResponse>(`${this.apiUrl}Token/Create`, { username, password })
            .post<AuthResponse>(`${this.apiUrl}`, body, { 'headers': headers })
            .pipe(
                tap((response) => {
                    this.saveToken(response.token);
                    this.isLoggedInSubject.next(true);
                    console.log("sono auth service");
                    console.log(response.token);
                })
            );
    }

    logout(): void {
        this.removeToken();
        this.isLoggedInSubject.next(false);
        this.router.navigate(['/login']);
    }

    saveToken(token: string): void {
        localStorage.setItem('authToken', token);
    }

    getToken(): string | null {
        return localStorage.getItem('authToken');
    }

    removeToken(): void {
        localStorage.removeItem('authToken');
    }

    isLoggedIn(): Observable<boolean> {
        return this.isLoggedInSubject.asObservable();
    }
}

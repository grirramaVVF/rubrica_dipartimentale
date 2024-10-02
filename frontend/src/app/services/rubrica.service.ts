import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IOffice } from '../models/IOffice';

@Injectable({
    providedIn: 'root'
})
export class RubricaService {
    private host: string = environment.apiGetHome;

    constructor(private http: HttpClient) { }

    getHome(queryString: string = "") {
        if (queryString == "") {
            queryString = "centrali";
        };

        return this.http.get<IOffice[]>(this.host + queryString);
    }

    getUfficiPeriferici() {
        let queryString: string = "periferia";
        return this.http.get<IOffice[]>(this.host + queryString);
    }
}

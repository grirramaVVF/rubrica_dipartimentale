import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IOffice } from '../models/IOffice';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  private host: string = environment.apiGetHome;

  constructor(private http: HttpClient) {

  }

  getHome() {
    let queryString: string = "";
    return this.http.get<IOffice[]>(this.host + queryString);
  }
}

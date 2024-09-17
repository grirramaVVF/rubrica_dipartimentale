import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs";  
import { IOffice } from "../models/IOffice";  

@Injectable({
  providedIn: 'root'
})
export class UfficiService {

  constructor(private chiamata: HttpClient) { }

  private url: string = "http://localhost:3000/ufficiRubrica";

  getUffici(): Observable<Array<IOffice>> {
    return this.chiamata.get<Array<IOffice>>(this.url);
  }

}

import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'  //oggetto che conterrà i dati asincroni ricevuti dalle chiamate

import { HttpClient } from '@angular/common/http'  //oggetto che gestisce la chiamata


import { ISede } from '../models/ISede';

@Injectable()
export class SedeServizio {
    constructor(
        private chiamata: HttpClient
    ) { }

    //dichiaro l'url da contattare (address point)
    private urlDaContattare: string = "http://localhost:5298/api/Rubrica/Ricerche/GetChildSedeFromWauc?IdSede=";
    

    getUffici(id: string): Observable<Array<ISede>> {
        return this.chiamata.get<Array<ISede>>(`${this.urlDaContattare}${id}`);
    }
}
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'  //oggetto che conterrà i dati asincroni ricevuti dalle chiamate

import { HttpClient } from '@angular/common/http'  //oggetto che gestisce la chiamata


import { IUfficio } from '../models/IUfficio';

@Injectable()
export class ufficisearchServizio {
    constructor(
        private chiamata: HttpClient
    ) { }

    //dichiaro l'url da contattare (address point)
    private urlDaContattare: string = "http://localhost:5298/api/Rubrica/Ricerche/GetUfficiByIdSede?IdSede=";

    //metodo che contatta il servizio e restituisce i dati
    getUffici(id: string | null): Observable<Array<IUfficio>> {
        return this.chiamata.get<Array<IUfficio>>(`${this.urlDaContattare}${id}`);
    }
}
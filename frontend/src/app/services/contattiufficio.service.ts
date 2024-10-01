import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'  //oggetto che conterrà i dati asincroni ricevuti dalle chiamate
import { HttpClient } from '@angular/common/http'  //oggetto che gestisce la chiamata
import { IContatto } from '../models/IContatto';

@Injectable()
export class ContattiufficioServizio {
    constructor(
        private chiamata: HttpClient
    ) { }

    //dichiaro l'url da contattare (address point)
    private urlDaContattare: string = "http://localhost:5298/api/Rubrica/Ricerche/GetContattiByIdUfficio?IdUfficio=";

    //metodo che contatta il servizio e restituisce i dati
    getContattiUfficio(id: string): Observable<Array<IContatto>> {
        return this.chiamata.get<Array<IContatto>>(`${this.urlDaContattare}${id}`);
    }
}
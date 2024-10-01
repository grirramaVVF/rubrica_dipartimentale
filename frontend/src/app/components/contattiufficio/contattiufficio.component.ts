
import { Component, Input, OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { ContattiufficioServizio } from '../../services/contattiufficio.service';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IContatto } from '../../models/IContatto';
import { Observable } from 'rxjs';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-contattiufficio',
  templateUrl: './contattiufficio.component.html',
  standalone: true,
  styleUrls: ['./contattiufficio.component.css'],
  imports : [
    NgFor,
    HttpClientModule,
    OverlayModule,
    MatCardModule
  ],
  providers: [ContattiufficioServizio, HttpClientModule]
})
export class ContattiufficioComponent implements OnInit{

myVariable$!: Observable<string>;
isOpen = false;

constructor( 
    private _ContattiufficioServizio: ContattiufficioServizio, private store: Store<{ myVariable$: string }>
    ) { 
    }

@Input() id_ufficio: string ="1"; 

listato: Array<IContatto> =[]

ngOnInit(): void {

  console.log("sono il componente Lista Utenti Ufficio")

  this._ContattiufficioServizio.getContattiUfficio(this.id_ufficio).subscribe(
    (datiricevuti) => {
      this.listato = datiricevuti;
      console.log("elenco contatti ufficio")
      console.log(this.listato);
    }
  )

}

id_utente:string="";

vedi_dettagli(cf:string) {
}


}

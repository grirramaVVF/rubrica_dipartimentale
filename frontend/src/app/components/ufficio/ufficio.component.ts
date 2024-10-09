
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISede } from '../../models/ISede';
import { ActivatedRoute, Router } from '@angular/router';
import { IContatto } from '../../models/IContatto';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { ContattiufficioComponent } from "../contattiufficio/contattiufficio.component";
import { NgFor, NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { SedeServizio } from '../../services/sedi.service';
import { HttpClientModule } from '@angular/common/http';
import { IUfficio } from '../../models/IUfficio';
import { ufficisearchServizio } from '../../services/ufficisearch.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-ufficio',
    templateUrl: './ufficio.component.html',
    styleUrls: ['./ufficio.component.css'],
    standalone: true,
    host: {ngSkipHydration: 'true'},
    imports: [
        MatCard,
        MatCardTitle,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelDescription,
        ContattiufficioComponent,
        NgFor,
        NgIf,
        MatCardModule,
        HttpClientModule
    ],
    providers: [ufficisearchServizio , HttpClientModule]
})



export class UfficioComponent implements OnInit, OnChanges {
  uffVariable$!: Observable<string>;
  
  padre_c: string | null ;

  constructor(private _ufficisearchServizio: ufficisearchServizio,private route: Router, private rotta: ActivatedRoute,private store: Store<{ uffVariable: string }> ) { 
    this.padre_c = this.padre;
  }
  panelOpenState = false;
  array_uffici: Array<IUfficio> = [];



  @Input()  padre!: string | null  ;
  array_uffici_filtrati : Array<IUfficio> = [];
  listato: Array<IUfficio> =[]
  
  ufficio_padre : string = "001";
  ufficio_padre_descr : string = "";
  

  ngOnInit(): void {
   console.log("Iniziallizzazione" + this.uffVariable$)
   this.uffVariable$ = this.store.select('uffVariable');
    this._ufficisearchServizio.getUffici(this.padre).subscribe(
      (datiricevuti) => {
        this.listato = datiricevuti;
        console.log(this.listato);
      }
    )

   }


ngOnChanges(changes: SimpleChanges): void {
  
  const livello_ufficio_value = changes['padre'];
  console.log("Aggiornamento")
  console.log("this.padre")

this._ufficisearchServizio.getUffici(this.padre).subscribe(
  (datiricevuti) => {
    this.listato = datiricevuti;
    console.log(this.listato);
  }
)

}

doNavigate(uff_descr: string, padre:number, idSede: number) {

}

}

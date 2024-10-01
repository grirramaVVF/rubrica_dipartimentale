
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISede } from '../../models/ISede';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { NgFor, NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { SedeServizio } from '../../services/sedi.service';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { setUffVariable } from '../../store/actions/uff-variable.action';

@Component({
    selector: 'app-sede',
    templateUrl: './sede.component.html',
    styleUrls: ['./sede.component.css'],
    standalone: true,
    imports: [
        MatCard,
        MatCardTitle,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelDescription,
        NgFor,
        NgIf,
        MatCardModule,
        HttpClientModule
    ],
    providers: [SedeServizio, HttpClientModule]
})



export class SedeComponent implements OnInit, OnChanges {
  constructor(private _SedeServizio: SedeServizio,private route: Router, private rotta: ActivatedRoute,  private store: Store<{ uffVariable$: string }> ) { 

  }
  panelOpenState = false;
  array_uffici: Array<ISede> = [];

  @Input() livello_ufficio: string = "001";
  array_uffici_filtrati : Array<ISede> = [];
  listato: Array<ISede> =[]
  
  ufficio_padre : string = "001";
  ufficio_padre_descr : string = "";
  padre : string = "";
  tiposede : string = "";

ngOnInit(): void {
   console.log("Iniziallizzazione")
    this._SedeServizio.getUffici(this.livello_ufficio).subscribe(
      (datiricevuti) => {
        this.listato = datiricevuti;
        console.log(this.listato);
      }
    )
   }

ngOnChanges(changes: SimpleChanges): void {
}

doNavigate(uff_descr: string, padre:string, id: string, tiposede : string) {

  console.log("DoNavigate");
  this.livello_ufficio = id;
  this.tiposede = tiposede;
  //this.livello_ufficio = id;
  if (tiposede == "COM" ) {
  console.log("Livello foglia");
  this.store.dispatch(setUffVariable({value : id}));
  console.log(id);
  } else {
  console.log("Nuovo Livello : "+this.livello_ufficio);
  this._SedeServizio.getUffici(this.livello_ufficio).subscribe(
    (datiricevuti) => {
      this.listato = datiricevuti;
      console.log(this.listato);
    }
  )
    this.ufficio_padre_descr = uff_descr;
  
  }


/*
console.log("DoNavigate");
this.livello_ufficio = id;
console.log("Nuovo Livello : "+this.livello_ufficio);
this._SedeServizio.getUffici(this.livello_ufficio).subscribe(
  (datiricevuti) => {
    this.listato = datiricevuti;
    console.log(this.listato);
  }
)
  this.ufficio_padre_descr = uff_descr;
*/
}

}






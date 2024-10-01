
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISede } from '../../models/ISede';
import { ActivatedRoute, Router } from '@angular/router';
//import { MatCard, MatCardTitle } from '@angular/material/card';
//import { MatAccordion, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { NgFor, NgIf } from '@angular/common';
// import { MatCardModule } from '@angular/material/card';
import { SedeServizio } from '../../services/sedi.service';
import { CercaComponent } from '../cerca/cerca.component';
import { ToprightbarComponent } from '../toprightbar/toprightbar.component';
// import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-sede',
    templateUrl: './sede.component.html',
    styleUrls: ['./sede.component.css'],
    standalone: true,
    imports: [
        NgFor,
        NgIf,
        CercaComponent,
        ToprightbarComponent
    ],
    providers: [SedeServizio]
})

export class SedeComponent implements OnInit, OnChanges {
    panelOpenState = false;
    array_uffici: Array<ISede> = [];

    @Input() livello_ufficio: string = "001";
    array_uffici_filtrati: Array<ISede> = [];
    listato: Array<ISede> = []

    ufficio_padre: string = "001";
    ufficio_padre_descr: string = "";
    padre: string = "";

    constructor(private _SedeServizio: SedeServizio, private route: Router, private rotta: ActivatedRoute) { }

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

    doNavigate(uff_descr: string, padre: string, id: string) {
        console.log("DoNavigate");
        this.livello_ufficio = id;
        console.log("Nuovo Livello : " + this.livello_ufficio);
        this._SedeServizio.getUffici(this.livello_ufficio).subscribe(
            (datiricevuti) => {
                this.listato = datiricevuti;
                console.log(this.listato);
            }
        )
        this.ufficio_padre_descr = uff_descr;
    }
}

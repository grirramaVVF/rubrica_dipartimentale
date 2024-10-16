import { Component, EventEmitter, Output } from '@angular/core';
import { UfficiComponent } from "../uffici/uffici.component";
import { NgForOf } from '@angular/common';
import { IOffice } from '../../models/IOffice';
import { AppState } from '../../store/states/app.state';
import { Store } from '@ngrx/store';
import { selectUfficioSelezionato } from '../../store/selectors/rubrica.selector';
import { MatExpansionModule } from '@angular/material/expansion';
import { NuovoModificaUfficioComponent } from '../nuovo-modifica-ufficio/nuovo-modifica-ufficio.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { faPen } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'vvfrubrica-sottouffici',
    standalone: true,
    templateUrl: './sottouffici.component.html',
    styleUrl: './sottouffici.component.css',
    imports: [
        UfficiComponent,
        NgForOf,
        FontAwesomeModule,
        MatExpansionModule,
        MatDialogModule,
        MatButtonModule,
        NuovoModificaUfficioComponent,]
})
export class SottoufficiComponent {
    faPen = faPen; 

    ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
    ufficioSelezionato: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };
    @Output() clickSubOffice = new EventEmitter<string>();

    constructor(private _storeApp$: Store<AppState>, private dialog: MatDialog) { }

    ngOnInit() {
        this.ufficioSelezionato$.subscribe(items => this.ufficioSelezionato = { ...items });
    }

    leggiSottoAlbero(codiceUO: string) {
        this.clickSubOffice.emit(codiceUO);
    }
    openFormUfficio() {
        const dialogRef = this.dialog.open(NuovoModificaUfficioComponent, {
            width: '400px',
            data: { nome: '', email: '' }  // Passa eventuali dati iniziali
        });
      
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log('Dati aggiornati:', result);
                // Puoi aggiornare i dati del personale qui con quelli ricevuti dal form
            }
        });
      }
}

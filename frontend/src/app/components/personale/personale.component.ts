import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { IOffice } from '../../models/IOffice';
import { selectUfficioSelezionato } from '../../store/selectors/rubrica.selector';
import { NgForOf, NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook,faPen } from '@fortawesome/free-solid-svg-icons';


import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NuovoModificaContattoComponent } from '../nuovo-modifica-contatto/nuovo-modifica-contatto.component';
import { MatButtonModule } from '@angular/material/button';
import { IPersonale } from '../../models/IPersonale';

@Component({
    selector: 'vvfrubrica-personale',
    standalone: true,
    imports: [
        NgForOf, NgIf, FontAwesomeModule,
        MatDialogModule,
        MatButtonModule,
        NuovoModificaContattoComponent,
    ],
    templateUrl: './personale.component.html',
    styleUrl: './personale.component.css'
})
export class PersonaleComponent {
    faAddressBook = faAddressBook;
    faPen = faPen; 
    
    ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
    ufficioSelezionato?: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };

    constructor(private _storeApp$: Store<AppState>, private dialog: MatDialog) { }

    ngOnInit() {
        this.ufficioSelezionato$.subscribe(
            items => {
                this.ufficioSelezionato = { ...items };
            }
        );
    }
    openFormContatto(p:IPersonale) {
        const dialogRef = this.dialog.open(NuovoModificaContattoComponent, {
            width: '800px', // Imposta la larghezza a 600px
            maxWidth: 'none', // Disabilita il limite di larghezza

            data: { persona:p }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log('Dati aggiornati:', result);
                // Puoi aggiornare i dati del personale qui con quelli ricevuti dal form
            }
        });
    }

}

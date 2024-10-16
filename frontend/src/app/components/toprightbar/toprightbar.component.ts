import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { selectHomeTabSelected, selectUfficioSelezionato } from '../../store/selectors/rubrica.selector';
import { IOffice } from '../../models/IOffice';
import { IPersonale } from '../../models/IPersonale';

import { SetHomeTabSelected } from '../../store/actions/rubrica.action';

import { NuovoModificaUfficioComponent } from '../nuovo-modifica-ufficio/nuovo-modifica-ufficio.component';
import { NuovoModificaContattoComponent } from '../nuovo-modifica-contatto/nuovo-modifica-contatto.component';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'; 

@Component({
    selector: 'vvfrubrica-toprightbar',
    standalone: true,
    imports: [MatButtonToggleModule, FormsModule,FontAwesomeModule],
    templateUrl: './toprightbar.component.html',
    styleUrl: './toprightbar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToprightbarComponent {
    faPlus=faPlusCircle;

    checkTopRightSelected$ = this._storeApp$.select(selectHomeTabSelected);
    @Input()
    checkTopRightSelected: string = '';
    checkTopRight: string = '';

    ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
    ufficioSelezionato?: IOffice | null = null;

    constructor(private _storeApp$: Store<AppState>, private dialog: MatDialog) { }

    ngOnInit() {
        this.ufficioSelezionato$.subscribe(items => this.ufficioSelezionato = { ...items });
        this.checkTopRightSelected$.subscribe(comp => this.checkTopRightSelected = comp);
    }

    onButtonClick() {
        this._storeApp$.dispatch(SetHomeTabSelected({ homeTabSelected: this.checkTopRightSelected }));
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
      openFormContatto() {
        
        const dialogRef = this.dialog.open(NuovoModificaContattoComponent, {
            width: '800px', // Imposta la larghezza a 600px
            maxWidth: 'none', // Disabilita il limite di larghezza
            data: { persona:null}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log('Dati aggiornati:', result);
                // Puoi aggiornare i dati del personale qui con quelli ricevuti dal form
            }
        });
    }
}

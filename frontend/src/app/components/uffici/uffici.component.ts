import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { IOffice } from '../../models/IOffice';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { AddElencoUfficiSelezionati, EmptyElencoUfficiSelezionati, SetIdSelectedOfficeComponent, SetUfficioSelezionato } from '../../store/actions/rubrica.action';
import {
    selectElencoUfficiSelezionati,
    selectIdSelectedOfficeComponent,
    selectUfficioSelezionato,
} from '../../store/selectors/rubrica.selector';

@Component({
    selector: 'vvfrubrica-uffici',
    standalone: true,
    imports: [CommonModule, MatExpansionModule, NgIf],
    templateUrl: './uffici.component.html',
    styleUrl: './uffici.component.css'
})
export class UfficiComponent {
    @Input() itemDst: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };
    @Output() back = new EventEmitter<string>();

    ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
    ufficioSelezionato: IOffice | null = null;

    elencoUfficiSelezionati$ = this._storeApp$.select(selectElencoUfficiSelezionati);
    elencoUfficiSelezionati: Array<IOffice | null> | null = null;

    idSelectedOfficeComponent$ = this._storeApp$.select(selectIdSelectedOfficeComponent);
    idSelectedOfficeComponent: string = '';

    constructor(private _storeApp$: Store<AppState>) { }

    ngOnInit(): void {
        this.ufficioSelezionato$.subscribe(items => this.ufficioSelezionato = { ...items });
        this.elencoUfficiSelezionati$.subscribe(ele => this.elencoUfficiSelezionati = ele);
        this.idSelectedOfficeComponent$.subscribe(id => this.idSelectedOfficeComponent = id);
    }

    leggiSottoAlbero() {
        this._storeApp$.dispatch(SetIdSelectedOfficeComponent({ id: this.itemDst.codiceUfficio }));

        if (this.itemDst.codiceUfficioSuperiore == '') {
            this._storeApp$.dispatch(EmptyElencoUfficiSelezionati());
            this._storeApp$.dispatch(AddElencoUfficiSelezionati({ufficioSelezionato:this.itemDst}));
        }

        this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: this.itemDst }));
    }

    onClickUfficioSelezionato() {
        this.back.emit('back');
    }
}

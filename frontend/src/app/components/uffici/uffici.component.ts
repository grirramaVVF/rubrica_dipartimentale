import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { IOffice } from '../../models/IOffice';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { SetUfficioSelezionato } from '../../store/actions/rubrica.action';
import {
    selectElencoUfficiSelezionati,
    selectUfficioSelezionato,
    selectUfficioSelezionatoPrecedente
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
    @Output() idComponentFather = new EventEmitter<string>();
    @Input() idRootOfficeClick: string = '';

    ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
    ufficioSelezionato: IOffice | null = null;

    ufficioSelezionatoPrecedente$ = this._storeApp$.select(selectUfficioSelezionatoPrecedente);
    ufficioSelezionatoPrecedente: IOffice|null = null;

    elencoUfficiSelezionati$ = this._storeApp$.select(selectElencoUfficiSelezionati);
    elencoUfficiSelezionati: Array<IOffice | null> | null = null;

    constructor(private _storeApp$: Store<AppState>) { }

    ngOnInit(): void {
        this.ufficioSelezionato$.subscribe(items => this.ufficioSelezionato = { ...items });
        this.ufficioSelezionatoPrecedente$.subscribe(items => this.ufficioSelezionatoPrecedente = { ...items });
        this.elencoUfficiSelezionati$.subscribe(ele => this.elencoUfficiSelezionati = ele);

        this.emitIdComponentFather(this.itemDst.codiceUfficio);
    }

    leggiSottoAlbero() {
        this.emitIdComponentFather(this.itemDst.codiceUfficio);
        this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: this.itemDst }));
    }

    onClickUfficioSelezionato() {
        this.back.emit('back');
        this.emitIdComponentFather(this.itemDst.codiceUfficio);
    }

    emitIdComponentFather(idCodiceUfficio: string) {
        this.idComponentFather.emit(idCodiceUfficio);
    }
}

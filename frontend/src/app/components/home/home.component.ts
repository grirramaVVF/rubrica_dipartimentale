import { Component } from '@angular/core';
import { CercaComponent } from '../cerca/cerca.component';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import {
    selectElencoUfficiSelezionati,
    selectHome,
    selectHomeTabSelected,
    selectUfficioSelezionato
} from '../../store/selectors/rubrica.selector';
import { IOffice } from '../../models/IOffice';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { UfficiComponent } from '../uffici/uffici.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SottoufficiComponent } from '../sottouffici/sottouffici.component';
import { ToprightbarComponent } from '../toprightbar/toprightbar.component';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { PersonaleComponent } from '../personale/personale.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Office } from '../../models/Office';
import {
    AddElencoUfficiSelezionati,
    DelElencoUfficiSelezionati,
    RubricaActionType,
    SetHomeTabSelected,
    SetUfficioSelezionato,
    SetUfficioSelezionatoPrecedente
} from '../../store/actions/rubrica.action';

@Component({
    selector: 'vvfrubrica-home',
    standalone: true,
    imports: [
        UfficiComponent,
        SideBarComponent,
        FontAwesomeModule,
        SottoufficiComponent,
        CercaComponent,
        ToprightbarComponent,
        AsyncPipe,
        NgForOf,
        PersonaleComponent,
        MatButtonModule,
        MatIconModule,
        NgIf,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    title = 'rubricadip';
    faAddressBook = faAddressBook;

    homeItems$ = this._storeApp$.select(selectHome);
    homeItems: Array<IOffice> = [];

    ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
    ufficioSelezionato: IOffice | null = null;

    leftComponentSelected$ = this._storeApp$.select(selectHomeTabSelected);
    leftComponentSelected: string = 'ufficiDipendenti';
    idComponentFather: string = '';

    elencoUfficiSelezionati$ = this._storeApp$.select(selectElencoUfficiSelezionati);
    elencoUfficiSelezionati: Array<IOffice | null> | null = null;

    constructor(private _storeApp$: Store<AppState>) { }

    ngOnInit() {
        this._storeApp$.dispatch({ type: RubricaActionType.GetHomeRubrica });
        this.homeItems$.subscribe(items => this.homeItems = [...items?.rubrica]);

        this.ufficioSelezionato$.subscribe(
            items => {
                this.ufficioSelezionato = { ...items };

                if (Object.keys(this.ufficioSelezionato ?? {}).length > 0) {
                    if (this.ufficioSelezionato?.children.length == 0) {
                        this._storeApp$.dispatch(SetHomeTabSelected({ homeTabSelected: "componenti" }));
                    }
                }
            }
        );

        this.leftComponentSelected$.subscribe(comp => this.leftComponentSelected = comp);
        this.elencoUfficiSelezionati$.subscribe(ele => this.elencoUfficiSelezionati = ele);
    }

    receiveBack(back: string) {
        let testVar = new Office();
        testVar.setOffices(this.homeItems);

        let prevOffice: IOffice | null = testVar.findOffice(this.ufficioSelezionato?.codiceUfficioSuperiore);

        if (prevOffice != null) {
            this.searchIfExiste();
            this._storeApp$.dispatch(SetUfficioSelezionatoPrecedente({ ufficioSelezionatoPrecedente: this.ufficioSelezionato }));
            this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: prevOffice }));
        }
    }

    receiveLeftFrameSelected(frame: string) {
        this._storeApp$.dispatch(SetHomeTabSelected({ homeTabSelected: frame }));
    }

    receiveIdComponentFather(father: string) {
        this.idComponentFather = father;
    }

    clickSubOffice(idSubOffice: string = '') {
        console.log('idSubOffice: ', idSubOffice);
        let temp: Array<IOffice> = this.ufficioSelezionato?.children.filter(element => element['codiceUfficio'] == idSubOffice) ?? [];

        if (temp.length > 0) {
            this._storeApp$.dispatch(AddElencoUfficiSelezionati({ ufficioSelezionato: this.ufficioSelezionato }));
            this._storeApp$.dispatch(SetUfficioSelezionatoPrecedente({ ufficioSelezionatoPrecedente: this.ufficioSelezionato }));
            this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: temp[0] }));
        }
    }

    searchIfExiste() {
        let trovato: boolean = false;
        for (let off of this.elencoUfficiSelezionati ?? []) {
            console.log('zzzzzz: ');

            if (off?.codiceUfficio == this.ufficioSelezionato?.codiceUfficio) {
                this._storeApp$.dispatch(DelElencoUfficiSelezionati({ ufficioSelezionato: this.ufficioSelezionato }));
                trovato = true;
                break;
            }
        }

        if (!trovato) {
            console.log('trovato');
            this._storeApp$.dispatch(AddElencoUfficiSelezionati({ ufficioSelezionato: this.ufficioSelezionato }));
        }
    }
}

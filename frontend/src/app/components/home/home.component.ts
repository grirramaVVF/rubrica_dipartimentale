import { Component } from '@angular/core';
import { CercaComponent } from '../cerca/cerca.component';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { IAuthUserState, initialAuthState } from '../../store/states/authuser.state';
import { selectHome, selectUfficioSelezionato } from '../../store/selectors/rubrica.selector';
import { IOffice } from '../../models/IOffice';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { RubricaActionType, SetUfficioSelezionato, SetUfficioSelezionatoPrecedente } from '../../store/actions/rubrica.action';
import { UfficiComponent } from '../uffici/uffici.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SottoufficiComponent } from '../sottouffici/sottouffici.component';
import { ToprightbarComponent } from '../toprightbar/toprightbar.component';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { PersonaleComponent } from '../personale/personale.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Office } from '../../models/Office';


@Component({
  selector: 'vvfrubrica-home',
  standalone: true,
  imports: [
    UfficiComponent,
    SideBarComponent,
    FontAwesomeModule,
    FlexLayoutModule,
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

  //authUser: IAuthUserState = initialAuthState;
  homeItems$ = this._storeApp$.select(selectHome);
  homeItems: Array<IOffice> = [];

  ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
  ufficioSelezionato: IOffice | null = null; //{ codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };

  leftComponentSelected: string = 'ufficiDipendenti';

  constructor(private _storeApp$: Store<AppState>) { }

  ngOnInit() {
    //this._storeApp$.dispatch({ type: AuthUserActionType.GetAuthToken });
    this._storeApp$.dispatch({ type: RubricaActionType.GetHomeRubrica });

    this.homeItems$.subscribe(
      items => {
        this.homeItems = [...items?.rubrica];
      }
    );

    this.ufficioSelezionato$.subscribe(
      items => {
        this.ufficioSelezionato = { ...items };
        this.leftComponentSelected = 'ufficiDipendenti';

        if (this.ufficioSelezionato?.children.length == 0) {
          this.leftComponentSelected = "componenti";
        }
      }
    );
  }

  receiveBack(back: string) {
    let testVar = new Office();
    testVar.setOffices(this.homeItems);

    let prevOffice: IOffice | null = testVar.findOffice(this.ufficioSelezionato?.codiceUfficioSuperiore);

    if (prevOffice != null) {
      this._storeApp$.dispatch(SetUfficioSelezionatoPrecedente({ ufficioSelezionatoPrecedente: this.ufficioSelezionato }));
      this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: prevOffice }));
    }
  }

  receiveLeftFrameSelected(frame: string) {
    this.leftComponentSelected = frame;
  }
}

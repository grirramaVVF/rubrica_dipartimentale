import { Component } from '@angular/core';
import { CercaComponent } from '../cerca/cerca.component';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { IAuthUserState, initialAuthState } from '../../store/states/authuser.state';
import { selectHome, selectUfficioSelezionato } from '../../store/selectors/rubrica.selector';
import { IOffice } from '../../models/IOffice';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { RubricaActionType, SetUfficioSelezionato } from '../../store/actions/rubrica.action';
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

  authUser: IAuthUserState = initialAuthState;
  homeItems$ = this._storeApp$.select(selectHome);
  homeItems: Array<IOffice> = [];
  currentItems: Array<IOffice | null> = [];

  ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
  ufficioSelezionato?: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };

  childrenSelected: Array<IOffice> = [];
  backToPreviousOffice: string = '';

  leftComponentSelected: string = 'ufficiDipendenti';

  constructor(private _storeApp$: Store<AppState>) { }

  ngOnInit() {
    //this._storeApp$.dispatch({ type: AuthUserActionType.GetAuthToken });
    this._storeApp$.dispatch({ type: RubricaActionType.GetHomeRubrica });

    this.homeItems$.subscribe(
      items => {
        this.homeItems = [...items?.rubrica];
        this.currentItems = this.homeItems;
      }
    );

    this.ufficioSelezionato$.subscribe(
      items => {
        this.ufficioSelezionato = { ...items };
        // console.log('appComponent: ', this.ufficioSelezionato?.nomeUfficio);
        // if (this.ufficioSelezionato?.codiceUfficioSuperiore) {
        this.currentItems = [];
        this.currentItems.push(this.ufficioSelezionato ?? null);
        // }
      }
    );
  }

  receiveChildren(children: IOffice) {
    console.log("app: ", children);
    this.childrenSelected = []
    this.childrenSelected = children.children;
  }

  receiveBack(back: string) {
    // console.log("app: ", children);
    this.backToPreviousOffice = '';
    this.backToPreviousOffice = back;

    let testVar = new Office();
    testVar.setOffices(this.homeItems);

    let prevOffice: IOffice | null = testVar.findOffice(this.ufficioSelezionato?.codiceUfficioSuperiore);
    console.log('codiceSuperiore: ', this.ufficioSelezionato?.codiceUfficioSuperiore);
    console.log('prevOffice: ', prevOffice);
    if (prevOffice != null) {
      this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: prevOffice }));
    }
  }

  onBackClick() {
    /*
    if (this.currentItems.length > 0) {
      let temp: IOffice = this.currentItems[0];

      let tempArray: Array<IOffice> = this.homeItems.filter(item => {
        if (item.codiceUfficio == temp.codiceUfficioSuperiore) {
          return item;
        }
        return;
      });

      if (tempArray.length > 0) {
        if (tempArray[0].codiceUfficioSuperiore == '') {
          this.currentItems = this.homeItems;
          this.childrenSelected = this.homeItems[0]?.children;
          console.log("wwwwww: ", this.childrenSelected);
        } else {
          this.currentItems = tempArray;
          this.childrenSelected = tempArray[0]?.children;
        }

        this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: tempArray[0] }));
      }
    }*/
  }

  onAzzeraClick() {
    this.currentItems = this.homeItems;
    this.childrenSelected = this.homeItems[0]?.children;

    if (this.currentItems.length > 0) {
      this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: this.currentItems[0] }));
    }
  }

  receiveLeftFrameSelected(frame: string) {
    console.log("dddd: ", frame);
    this.leftComponentSelected = frame;
  }

}

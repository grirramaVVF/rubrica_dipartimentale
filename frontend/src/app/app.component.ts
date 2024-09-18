import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UfficiComponent } from './components/uffici/uffici.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SottoufficiComponent } from './components/sottouffici/sottouffici.component';
import { CercaComponent } from "./components/cerca/cerca.component";
import { ToprightbarComponent } from "./components/toprightbar/toprightbar.component";
import { Store } from '@ngrx/store';
import { AppState } from './store/states/app.state';
import { IAuthUserState, initialAuthState } from './store/states/authuser.state';
import { selectHome, selectUfficioSelezionato } from './store/selectors/rubrica.selector';
import { RubricaActionType, SetUfficioSelezionato } from './store/actions/rubrica.action';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { IOffice } from './models/IOffice';
import { PersonaleComponent } from './components/personale/personale.component';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'vvfrubrica-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
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
  ]
})
export class AppComponent {
  title = 'rubricadip';
  faAddressBook = faAddressBook;

  authUser: IAuthUserState = initialAuthState;
  homeItems$ = this._storeApp$.select(selectHome);
  homeItems: Array<IOffice> = [];
  currentItems: Array<IOffice> = [];

  ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
  ufficioSelezionato?: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };

  childrenSelected: Array<IOffice> = [];

  leftComponentSelected: string = 'ufficiDipendenti';

  constructor(private _storeApp$: Store<AppState>) { }

  ngOnInit() {
    //this._storeApp$.dispatch({ type: AuthUserActionType.GetAuthToken });
    this._storeApp$.dispatch({ type: RubricaActionType.GetHomeRubrica });

    this.homeItems$.subscribe(
      items => {
        this.homeItems = [...items?.rubrica];
        this.currentItems = this.homeItems;
        this.childrenSelected = this.homeItems[0]?.children;
      }
    );

    this.ufficioSelezionato$.subscribe(
      items => {
        this.ufficioSelezionato = { ...items };
        if (this.ufficioSelezionato?.codiceUfficioSuperiore) {
          this.currentItems = [];
          this.currentItems.push(this.ufficioSelezionato);
        }
      }
    );
  }

  receiveChildren(children: Array<IOffice>) {
    // console.log("app: ", children);
    this.childrenSelected = []
    this.childrenSelected = children;
  }

  onBackClick() {
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
    }
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

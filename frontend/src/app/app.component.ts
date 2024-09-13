import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemAOOComponent } from './components/item-aoo/item-aoo.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SottoufficiComponent } from './components/sottouffici/sottouffici.component';
import { CercaComponent } from "./components/cerca/cerca.component";
import { ToplrftbarComponent } from "./components/topleftbar/topleftbar.component";
import { Store } from '@ngrx/store';
import { AppState } from './store/states/app.state';
import { AuthService } from './services/auth.service';
import { IAuthUserState, initialAuthState } from './store/states/authuser.state';
import { AuthUserActionType } from './store/actions/authuser.action';
import { selectHome } from './store/selectors/rubrica.selector';
import { RubricaActionType } from './store/actions/rubrica.action';
import { AsyncPipe, NgForOf } from '@angular/common';
import { IOffice } from './models/IOffice';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ItemAOOComponent, SideBarComponent, FontAwesomeModule, FlexLayoutModule, SottoufficiComponent, CercaComponent, ToplrftbarComponent,
    AsyncPipe, NgForOf
  ]
})
export class AppComponent {
  title = 'rubricadip';
  faAddressBook = faAddressBook;
  authUser: IAuthUserState = initialAuthState;
  homeItems$ = this._storeApp$.select(selectHome);
  homeItems: Array<IOffice> = [];

  childrenSelected: Array<IOffice> = [];

  /*da gestire altrove */
  // CapoCorpo: string = "#495380";
  // ViceCapoDipartimentoVicario: string = "#840101";
  // UfficioCollegamento: string = "#ff7c7c";
  // UfficioComunicazioneEmergenza: string = "#ffdcdc";
  // ONA: string = "#e1e1e1";

  constructor(private _storeApp$: Store<AppState>,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this._storeApp$.dispatch({ type: AuthUserActionType.GetAuthToken });
    this._storeApp$.dispatch({ type: RubricaActionType.GetHomeRubrica });

    // this._storeApp$.select(selectAuthUser).subscribe(
    //   s => {console.log('authUser',s);}
    // );

    this.homeItems$.subscribe(
      items => {
        // console.log('homeItems', items);
        this.homeItems = [...items?.rubrica];
      }
    );

    //console.log(environment.apiCreateTocken);
  }

  receiveChildren(children: Array<IOffice>) {
    console.log("app: ", children);
    this.childrenSelected = []
    this.childrenSelected = children;
  }
}

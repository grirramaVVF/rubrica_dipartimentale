
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemAOOComponent } from '../item-aoo/item-aoo.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SottoufficiComponent } from '../sottouffici/sottouffici.component';
import { CercaComponent } from "../cerca/cerca.component";
import { ToplrftbarComponent } from "../topleftbar/topleftbar.component";
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { AuthService } from '../../services/auth.service';
import { IAuthUserState, initialAuthState } from '../../store/states/authuser.state';
import { AuthUserActionType } from '../../store/actions/authuser.action';
import { selectHome } from '../../store/selectors/rubrica.selector';
import { RubricaActionType } from '../../store/actions/rubrica.action';
import { AsyncPipe, NgForOf } from '@angular/common';
import { IOffice } from '../../models/IOffice';
import { SedeComponent } from "../sede/sede.component";

@Component({
  selector: 'app-rubrica',
  standalone: true,
  imports: [RouterOutlet, ItemAOOComponent, SideBarComponent, FontAwesomeModule, FlexLayoutModule, SottoufficiComponent, CercaComponent, ToplrftbarComponent,
    AsyncPipe, NgForOf, SedeComponent],
  templateUrl: './rubrica.component.html',
  styleUrl: './rubrica.component.css'
})
export class RubricaComponent {
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

    this.homeItems$.subscribe(
      items => {
        // console.log('homeItems', items);
        this.homeItems = [...items?.rubrica];
        this.childrenSelected=this.homeItems[0].children;
      }
    );
  }

  receiveChildren(children: Array<IOffice>) {
    // console.log("app: ", children);
    this.childrenSelected = []
    this.childrenSelected = children;
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ItemAOOComponent } from './components/item-aoo/item-aoo.component';
import { IVMAOOItemobj } from './interfaces/IVMAOOItemobj';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SottoufficiComponent } from './components/sottouffici/sottouffici.component';
import { CercaComponent } from "./components/cerca/cerca.component";
import { ToplrftbarComponent } from "./components/topleftbar/topleftbar.component";
import { environment } from './../environments/environment'
import { Store } from '@ngrx/store';
import { selectAuthUser } from './store/selectors/authuser.selector';
import { AppState } from './store/states/app.state';
import { AuthService } from './services/auth.service';
import { IAuthUserState, initialAuthState } from './store/states/authuser.state';
import { AuthUserActionType } from './store/actions/authuser.action';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ItemAOOComponent, SideBarComponent, FontAwesomeModule, FlexLayoutModule, SottoufficiComponent, CercaComponent, ToplrftbarComponent]
})
export class AppComponent {
  title = 'rubricadip';
  faAddressBook = faAddressBook;
  authUser: IAuthUserState = initialAuthState;

  /*da gestire altrove */
  CapoCorpo: string = "#495380";
  ViceCapoDipartimentoVicario: string = "#840101";
  UfficioCollegamento: string = "#ff7c7c";
  UfficioComunicazioneEmergenza: string = "#ffdcdc";
  ONA: string = "#e1e1e1";

  itemSrcCC: IVMAOOItemobj = {
    codiceUO: "00.0",
    riga1: 'Prefetto Franceschelli',
    riga2: 'Capo Dipartimento',
    riga3: '',
    isChild: false,
    coloreSfondoBase: this.CapoCorpo,
    opacita: 1,
    children: [
      { codiceUO: "00.1000", isChild: true, coloreSfondoBase: this.CapoCorpo, opacita: 0.8, children: [], riga1: "figlio1", riga2: "", riga3: "" },
      {
        codiceUO: "00.1001", isChild: true, coloreSfondoBase: this.CapoCorpo, opacita: 0.8
        , children: [
          { codiceUO: "00.1002", isChild: true, coloreSfondoBase: this.CapoCorpo, opacita: 0.6, children: [], riga1: "figlio2.1", riga2: "", riga3: "" },
        ], riga1: "figlio2", riga2: "", riga3: ""
      },
    ]
  }
  itemSrcVCDV: IVMAOOItemobj = {
    codiceUO: "01.0",
    riga1: 'Vice Capo Dipartimento Vicario',
    riga2: 'Capo del Corpo Nazionale dei Vigili del Fuoco',
    riga3: '',
    isChild: false,
    coloreSfondoBase: this.ViceCapoDipartimentoVicario,
    opacita: 1,
    children: [
      /*{isChild:true,coloreSfondoBase:this.ViceCapoDipartimentoVicario,opacita:0.8,children:[],riga1:"figlio1",riga2:"",riga3:""},
      {isChild:true,coloreSfondoBase:this.ViceCapoDipartimentoVicario,opacita:0.8
        ,children:[
          {isChild:true,coloreSfondoBase:this.ViceCapoDipartimentoVicario,opacita:0.6,children:[],riga1:"figlio2.1",riga2:"",riga3:""},
        ],riga1:"figlio2",riga2:"",riga3:""},
        */
    ]
  }
  itemSrcUC: IVMAOOItemobj = {
    codiceUO: "02.0",
    riga1: 'Ufficio di collegamento',
    riga2: 'del Capo Dipartimento e del Capo del CNVVF',
    riga3: '',
    isChild: false,
    coloreSfondoBase: this.UfficioCollegamento,
    opacita: 1,
    children: [
      /*      {isChild:true,coloreSfondoBase:this.UfficioCollegamento,opacita:0.8,children:[],riga1:"figlio1",riga2:"",riga3:""},
            {isChild:true,coloreSfondoBase:this.UfficioCollegamento,opacita:0.8
              ,children:[
                {isChild:true,coloreSfondoBase:this.UfficioCollegamento,opacita:0.6,children:[],riga1:"figlio2.1",riga2:"",riga3:""},
              ],riga1:"figlio2",riga2:"",riga3:""},
        */
    ]
  }
  itemSrcUCE: IVMAOOItemobj = {
    codiceUO: "03.0",
    riga1: 'Ufficio per la Comunicazione in Emergenza',
    riga2: '',
    riga3: '',
    isChild: false,
    coloreSfondoBase: this.UfficioComunicazioneEmergenza,
    opacita: 1,
    children: [
      /*      {isChild:true,coloreSfondoBase:this.UfficioComunicazioneEmergenza,opacita:0.8,children:[],riga1:"figlio1",riga2:"",riga3:""},
            {isChild:true,coloreSfondoBase:this.UfficioComunicazioneEmergenza,opacita:0.8
              ,children:[
                {isChild:true,coloreSfondoBase:this.UfficioComunicazioneEmergenza,opacita:0.6,children:[],riga1:"figlio2.1",riga2:"",riga3:""},
              ],riga1:"figlio2",riga2:"",riga3:""},
        */
    ]
  }
  itemSrcONA: IVMAOOItemobj = {
    codiceUO: "04.0",
    riga1: 'Opera Nazionale Assistenza',
    riga2: '',
    riga3: '',
    isChild: false,
    coloreSfondoBase: this.ONA,
    opacita: 1,
    children: [
      /*      {isChild:true,coloreSfondoBase:this.UfficioComunicazioneEmergenza,opacita:0.8,children:[],riga1:"figlio1",riga2:"",riga3:""},
            {isChild:true,coloreSfondoBase:this.UfficioComunicazioneEmergenza,opacita:0.8
              ,children:[
                {isChild:true,coloreSfondoBase:this.UfficioComunicazioneEmergenza,opacita:0.6,children:[],riga1:"figlio2.1",riga2:"",riga3:""},
              ],riga1:"figlio2",riga2:"",riga3:""},
        */
    ]
  }

  constructor(private _storeApp$: Store<AppState>,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this._storeApp$.dispatch({ type: AuthUserActionType.GetAuthToken });

    this._storeApp$.select(selectAuthUser).subscribe(
      s => {
        console.log('authUser',s);
      }
    );

    //console.log(environment.apiCreateTocken);
  }
}

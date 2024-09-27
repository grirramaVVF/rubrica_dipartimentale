import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common'; // Importa CommonModule
import { MatExpansionModule } from '@angular/material/expansion';
import { IOffice } from '../../models/IOffice';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { SetUfficioSelezionato } from '../../store/actions/rubrica.action';
import { selectUfficioSelezionato, selectUfficioSelezionatoPrecedente } from '../../store/selectors/rubrica.selector';

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
  ufficioSelezionato: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };

  ufficioSelezionatoPrecedente$ = this._storeApp$.select(selectUfficioSelezionatoPrecedente);
  ufficioSelezionatoPrecedente: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };

  constructor(private _storeApp$: Store<AppState>) { }

  ngOnInit(): void {
    this.ufficioSelezionato$.subscribe(
      items => {
        this.ufficioSelezionato = { ...items };
      }
    );

    this.ufficioSelezionatoPrecedente$.subscribe(
      items => {
        this.ufficioSelezionatoPrecedente = { ...items };
      }
    );
  }

  leggiSottoAlbero(codiceUO: string) {
    this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: this.itemDst }));
  }

  onClickUfficioSelezionatoPrecedente() {
    this.back.emit('back');
    //console.log('ufficio selezionato precedente: ', this.ufficioSelezionatoPrecedente);
    //this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: this.ufficioSelezionatoPrecedente }));
  }

  onClickUfficioSelezionato() {
    this.back.emit('back');
    //console.log('ufficio selezionato: ', this.ufficioSelezionato);
    //console.log('ufficio selezionato: ', this.ufficioSelezionatoPrecedente);
    //if (this.ufficioSelezionato.codiceUfficio != this.ufficioSelezionatoPrecedente.codiceUfficio) {
    //  this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: this.ufficioSelezionato }));
    //}
  }
}

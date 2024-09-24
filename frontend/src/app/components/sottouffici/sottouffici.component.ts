import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UfficiComponent } from "../uffici/uffici.component";
import { NgForOf } from '@angular/common';
import { IOffice } from '../../models/IOffice';
import { AppState } from '../../store/states/app.state';
import { Store } from '@ngrx/store';
import { selectUfficioSelezionato } from '../../store/selectors/rubrica.selector';
import { SetUfficioSelezionato } from '../../store/actions/rubrica.action';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'vvfrubrica-sottouffici',
  standalone: true,
  templateUrl: './sottouffici.component.html',
  styleUrl: './sottouffici.component.css',
  imports: [UfficiComponent, NgForOf, MatExpansionModule]
})
export class SottoufficiComponent {
  ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
  ufficioSelezionato: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };

  @Input() childrenItems: Array<IOffice> = [];
  @Output() childSelected = new EventEmitter<IOffice>();

  constructor(private _storeApp$: Store<AppState>) { }

  ngOnInit() {
    this.ufficioSelezionato$.subscribe(
      items => {
        this.ufficioSelezionato = { ...items };
        this.childrenItems = this.ufficioSelezionato?.children || [];
        console.log('onInit sottoUfficio component: ',this.ufficioSelezionato?.nomeUfficio);

      }
    );
  }

  leggiSottoAlbero(codiceUO: string) {
    console.log("sottoUffici: ", this.ufficioSelezionato, 'codice: ', codiceUO);
    let temp = this.ufficioSelezionato.children.filter(element => element['codiceUfficio'] == codiceUO);
    console.log("tempZZZ: ", temp);

    if (temp.length > 0) {
      this.childSelected.emit(this.ufficioSelezionato);
      this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: temp[0] }));
    }
  }
}

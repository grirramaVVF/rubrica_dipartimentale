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
      }
    );
  }

  leggiSottoAlbero(codiceUO: string) {
    let temp: Array<IOffice> = this.ufficioSelezionato.children.filter(element => element['codiceUfficio'] == codiceUO);

    if (temp.length > 0) {
      if (temp[0].children.length > 0) {
        this.childSelected.emit(this.ufficioSelezionato);
        this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: temp[0] }));
      }
    }
  }
}

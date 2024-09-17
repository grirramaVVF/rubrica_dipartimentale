import { Component, Input } from '@angular/core';
import { UfficiComponent } from "../uffici/uffici.component";
import { NgForOf } from '@angular/common';
import { IOffice } from '../../models/IOffice';
import { AppState } from '../../store/states/app.state';
import { Store } from '@ngrx/store';
import { selectUfficioSelezionato } from '../../store/selectors/rubrica.selector';

@Component({
  selector: 'app-sottouffici',
  standalone: true,
  templateUrl: './sottouffici.component.html',
  styleUrl: './sottouffici.component.css',
  imports: [UfficiComponent, NgForOf]
})
export class SottoufficiComponent {
  ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
  ufficioSelezionato?: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };

  @Input() childrenItems: Array<IOffice> = [];

  constructor(private _storeApp$: Store<AppState>) { }

  ngOnInit() {
    this.ufficioSelezionato$.subscribe(
      items => {
        this.ufficioSelezionato = { ...items };
        this.childrenItems = this.ufficioSelezionato?.children || [];
      }
    );
  }
}

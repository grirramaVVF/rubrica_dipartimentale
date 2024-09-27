import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { IOffice } from '../../models/IOffice';
import { selectUfficioSelezionato } from '../../store/selectors/rubrica.selector';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'vvfrubrica-personale',
  standalone: true,
  imports: [NgForOf,NgIf],
  templateUrl: './personale.component.html',
  styleUrl: './personale.component.css'
})
export class PersonaleComponent {
  ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
  ufficioSelezionato?: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };

  constructor(private _storeApp$: Store<AppState>) { }

  ngOnInit() {
    this.ufficioSelezionato$.subscribe(
      items => {
        this.ufficioSelezionato = { ...items };
      }
    );
  }

}

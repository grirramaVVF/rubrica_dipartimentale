import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { MatExpansionModule } from '@angular/material/expansion';
import { IOffice } from '../../models/IOffice';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { SetUfficioSelezionato } from '../../store/actions/rubrica.action';

@Component({
  selector: 'vvfrubrica-item-aoo',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './uffici.component.html',
  styleUrl: './uffici.component.css'
})
export class UfficiComponent {  // ItemAOOComponent {

  @Input() itemDst: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };
  @Output() childSelected = new EventEmitter<[]>();

  constructor(private _storeApp$: Store<AppState>) { }

  ngOnInit(): void { }

  leggiSottoAlbero(codiceUO: string) {
    this.childSelected.emit(this.itemDst.children);

    this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: this.itemDst }));
  }
}

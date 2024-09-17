import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { selectUfficioSelezionato } from '../../store/selectors/rubrica.selector';
import { IOffice } from '../../models/IOffice';

@Component({
  selector: 'vvfrubrica-topleftbar',
  standalone: true,
  imports: [MatButtonToggleModule, FormsModule],
  templateUrl: './topleftbar.component.html',
  styleUrl: './topleftbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToplrftbarComponent {
  topLeftBar: string = 'ufficiDipendenti';

  ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
  ufficioSelezionato?: IOffice = { codiceUfficio: "", coloreSfondo: "#ffffff", nomeUfficio: "", nomeTitolare: "", children: [] };

  @Output() frameSelected = new EventEmitter<string>();

  constructor(private _storeApp$: Store<AppState>) { }

  ngOnInit() {
    this.ufficioSelezionato$.subscribe(
      items => {
        this.ufficioSelezionato = { ...items };

        if (this.ufficioSelezionato?.codiceUfficio) {
          this.topLeftBar = 'ufficiDipendenti';
        }
      }
    );
  }

  onButtonClick() {
    this.frameSelected.emit(this.topLeftBar);
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { selectHomeTabSelected, selectUfficioSelezionato } from '../../store/selectors/rubrica.selector';
import { IOffice } from '../../models/IOffice';
import { SetHomeTabSelected } from '../../store/actions/rubrica.action';

@Component({
    selector: 'vvfrubrica-toprightbar',
    standalone: true,
    imports: [MatButtonToggleModule, FormsModule],
    templateUrl: './toprightbar.component.html',
    styleUrl: './toprightbar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToprightbarComponent {
    checkTopRight$ = this._storeApp$.select(selectHomeTabSelected);
    checkTopRight: string = '';

    ufficioSelezionato$ = this._storeApp$.select(selectUfficioSelezionato);
    ufficioSelezionato?: IOffice | null = null;

    constructor(private _storeApp$: Store<AppState>) { }

    ngOnInit() {
        this.ufficioSelezionato$.subscribe(items => this.ufficioSelezionato = { ...items });
        this.checkTopRight$.subscribe(comp => this.checkTopRight = comp);
    }

    onButtonClick() {
        this._storeApp$.dispatch(SetHomeTabSelected({ homeTabSelected: this.checkTopRight }));
    }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Store } from '@ngrx/store';
import { AppState } from './store/states/app.state';
import { RubricaActionType, SetUfficioSelezionato } from './store/actions/rubrica.action';
import { selectHome } from './store/selectors/rubrica.selector';
import { Subscription } from 'rxjs';
import { IOffice } from './models/IOffice';

@Component({
  selector: 'vvfrubrica-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, SideBarComponent, FontAwesomeModule, FlexLayoutModule,]
})
export class AppComponent {
  title = 'rubricadip';
  faAddressBook = faAddressBook;

  constructor(private _storeApp$: Store<AppState>) { }

  ngOnInit() {
    //this._storeApp$.dispatch({ type: AuthUserActionType.GetAuthToken });
    this._storeApp$.dispatch({ type: RubricaActionType.GetHomeRubrica });

    let homeItems: Array<IOffice> = [];
    let sub: Subscription = this._storeApp$.select(selectHome)
      .subscribe(office => {
        console.log("eeeeee: ",office);
        homeItems=[...office?.rubrica];

      });
      console.log("eeeeee: ",homeItems);
    this._storeApp$.dispatch(SetUfficioSelezionato({ ufficioSelezionato: homeItems[0] }));

    sub.unsubscribe();
  }
}

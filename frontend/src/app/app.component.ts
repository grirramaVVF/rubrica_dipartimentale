import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Store } from '@ngrx/store';
import { AppState } from './store/states/app.state';
import { RubricaActionType } from './store/actions/rubrica.action';

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
  }
}

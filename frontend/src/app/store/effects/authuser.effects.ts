import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { AuthUserActionType } from '../actions/authuser.action';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { setToken } from '../selectors/authuser.selector';

@Injectable()
export class AuthUserEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(AuthUserActionType.GetAuthToken),
    exhaustMap(() => this.authService.getAuthToken()
      .pipe(
        map((result: any) => {
          //console.log(result["token"]);
          //this._appStore$.select(setToken).subscribe();
          this._appStore$.dispatch({type: AuthUserActionType.SetAuthToken, token: result["token"]})
          return ({ type: AuthUserActionType.GetAuthTokenSuccess, payload: result })
        }),
        catchError(() => of({ type: AuthUserActionType.GetAuthTokenError }))
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private _appStore$: Store<AppState>
  ) { }
}

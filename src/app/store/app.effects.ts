import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as actions from './app.actions';

@Injectable()
export class AppEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(actions.goAction.type),
    mergeMap((input) => {console.log(input); return this.http.get('https://api.exchangeratesapi.io/2020-01-12')
      .pipe(
        map((res) => {console.log(res);return ({ type: actions.requestAction.type, payload: res });}),
        catchError(() => EMPTY)
      )
      })
  ));
 
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}
}
import { Action, createReducer, on } from '@ngrx/store';
import {AppState} from './app.state';
import * as AppActions from './app.actions';


export const initialState: AppState = {
  input: '',
  answer: '',
}

const appReducer = createReducer(
  initialState,
  on(AppActions.goAction, (state, {input}) => ({ ...state, input })),
  on(AppActions.requestAction, (state, {answer}) => ({ ...state, answer })),
);

export const reducer = (state: AppState | undefined, action: Action) => appReducer(state, action);

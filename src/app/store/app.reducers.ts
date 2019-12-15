import { Action, createReducer, on } from '@ngrx/store';
import {AppState} from './app.state';
import * as AppActions from './app.actions';


export const initialState: AppState = {
  word: '',
  answer: '',
}

const appReducer = createReducer(
  initialState,
  on(AppActions.goAction, (state, {word}) => ({ ...state, word })),
  on(AppActions.requestAction, (state, {answer}) => ({ ...state, answer })),
);

export const reducer = (state: AppState | undefined, action: Action) => appReducer(state, action);

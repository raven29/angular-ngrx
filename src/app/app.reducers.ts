import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export interface State {
  word: string;
  answer: string;
}

export const initialState: State = {
  word: '',
  answer: '',
}

const appReducer = createReducer(
  initialState,
  on(AppActions.goAction, (state, {word}) => ({ ...state, word })),
  on(AppActions.requestAction, (state, {answer}) => ({ ...state, answer })),
);

export const reducer = (state: State | undefined, action: Action) => appReducer(state, action);

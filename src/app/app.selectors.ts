import { AppState } from './app.reducers';
import { createSelector } from '@ngrx/store';
 
export const selectState = (state: AppState): AppState => state;
 
export const selectorWord = createSelector(
  selectState,
  (state: AppState) => state.word
);
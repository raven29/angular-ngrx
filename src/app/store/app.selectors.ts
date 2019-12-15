import { AppState } from './app.state';
import { createSelector } from '@ngrx/store';
 
export const selectRootState = (state: {root: AppState}): AppState => state.root;
 
export const selectorWord = createSelector(
  selectRootState,
  (state: AppState) => state.word
);

export const selectorAnswer = createSelector(
  selectRootState,
  (state: AppState) => state.answer
);
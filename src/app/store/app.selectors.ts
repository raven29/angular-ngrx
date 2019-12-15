import { AppState } from './app.state';
import { createSelector } from '@ngrx/store';
 
export const selectRootState = (state: {root: AppState}): AppState => state.root;
 
export const selectorInput = createSelector(
  selectRootState,
  (state: AppState) => state.input
);

export const selectorAnswer = createSelector(
  selectRootState,
  (state: AppState) => state.answer
);
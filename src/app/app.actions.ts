import {createAction, props} from '@ngrx/store';

export const goAction = createAction(
  '[App]: Go! Action',
  props<{word: string}>()
);

export const requestAction = createAction(
  '[App]: Request Action',
  props<{answer: string}>()
);

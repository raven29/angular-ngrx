import {createAction, props} from '@ngrx/store';

export const goAction = createAction(
  '[App]: Go! Action',
  props<{input: string}>()
);

export const requestAction = createAction(
  '[App]: Request Action',
  props<{answer: string}>()
);

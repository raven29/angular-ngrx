import {createAction, props} from '@ngrx/store';

export interface Data {
  word: string;
  answer: string;
}

export const goAction = createAction(
  '[App]: Go! Action',
  props<{word: string}>()
);

export const requestAction = createAction(
  '[App]: Request Action',
  props<{answer: string}>()
);

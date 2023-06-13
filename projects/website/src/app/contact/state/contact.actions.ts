import { createAction, props } from '@ngrx/store';

export const submitForm = createAction(
  '[Contact Form Page] Submit Form',
  props<{ name: string; email: string; message: string }>()
);

export const submitFormSuccess = createAction(
  '[Contact API] Submit Form Success',
  props<{ success: boolean }>()
);

export const submitFormFailure = createAction(
  '[Contact API] Submit Form Failure',
  props<{ error: string }>()
);

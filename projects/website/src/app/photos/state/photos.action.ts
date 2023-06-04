import { createAction, props } from '@ngrx/store';
import { IPhoto, PhotoTag } from 'data';

export const selectPhoto = createAction(
  '[Photo Page] Select Photo',
  props<{ photoId: string | null }>()
);

export const loadPhotos = createAction('[Photo Page] Load Photos');

export const loadPhotosSuccess = createAction(
  '[Photo API] Photo Load Success',
  props<{ photos: IPhoto[] }>()
);

export const loadPhotosFailure = createAction(
  '[Photo API] Photo Load Failure',
  props<{ error: string }>()
);

export const loadCategories = createAction('[Photo Page] Load Categories');

export const loadCategoriesSuccess = createAction(
  '[Photo API] Photo Load Success',
  props<{ categories: PhotoTag[] }>()
);

export const loadCategoriesFailure = createAction(
  '[Photo API] Categories Load Failure',
  props<{ error: string }>()
);

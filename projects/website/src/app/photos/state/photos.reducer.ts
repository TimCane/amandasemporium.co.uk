import { createReducer, on } from '@ngrx/store';
import {
  loadCategories,
  loadCategoriesFailure,
  loadCategoriesSuccess,
  loadPhotos,
  loadPhotosFailure,
  loadPhotosSuccess,
  selectPhoto,
} from './photos.action';
import { PhotosState, initialState, photosAdapter } from './photos.state';

export const photosReducer = createReducer<PhotosState>(
  initialState,

  on(selectPhoto, (state, { photoId }) => {
    return { ...state, selectedPhotoId: photoId };
  }),

  on(loadPhotos, (state) => ({ ...state, status: 'loading' })),

  on(loadPhotosSuccess, (state, { photos }) => {
    return photosAdapter.setAll(photos, {
      ...state,
      error: null,
      status: 'success',
    });
  }),

  on(loadPhotosFailure, (state, { error }) => {
    return photosAdapter.removeAll({
      ...state,
      selectedPhotoId: null,
      error: error,
      status: 'error',
    });
  }),

  on(loadCategories, (state) => ({ ...state, status: 'loading' })),

  on(loadCategoriesSuccess, (state, { categories }) => {
    return {
      ...state,
      error: null,
      status: 'success',
      categories: categories,
    };
  }),

  on(loadCategoriesFailure, (state, { error }) => {
    return {
      ...state,
      selectedPhotoId: null,
      error: error,
      status: 'error',
      categories: [],
    };
  })
);

export const getSelectedPhotoId = (state: PhotosState) => state.selectedPhotoId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  photosAdapter.getSelectors();

// select the array of photo ids
export const selectPhotoIds = selectIds;

// select the dictionary of photo entities
export const selectPhotoEntities = selectEntities;

// select the array of photos
export const selectAllPhotos = selectAll;

// select the total photo count
export const selectPhotoTotal = selectTotal;

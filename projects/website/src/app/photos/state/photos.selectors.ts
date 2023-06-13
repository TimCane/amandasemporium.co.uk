import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotosState, photosAdapter } from './photos.state';

export const photosFeature =
  createFeatureSelector<PhotosState>('photosFeature');
const selector = <T>(mapping: (state: PhotosState) => T) =>
  createSelector(photosFeature, mapping);

const { selectEntities, selectAll } = photosAdapter.getSelectors();

export const selectPhotoEntities = selector(selectEntities);

export const getPhotos = selector(selectAll);

export const getCategories = selector((state) => state.categories);

export const getSelectedPhotoId = selector((state) => state.selectedPhotoId);

export const getPhoto = createSelector(
  selectPhotoEntities,
  getSelectedPhotoId,
  (photos, selectedPhotoId) => {
    if (selectedPhotoId) {
      return photos[selectedPhotoId];
    }
    return null;
  }
);

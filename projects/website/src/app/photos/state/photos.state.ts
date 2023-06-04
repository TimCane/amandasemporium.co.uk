import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IPhoto, PhotoTag } from 'data';

export interface PhotosState extends EntityState<IPhoto> {
  selectedPhotoId: string | null;

  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success'; //TODO: Enum,
  categories: PhotoTag[];
}

export function selectPhotoId(photo: IPhoto): string {
  return photo.Id;
}

export function sortBySource(a: IPhoto, b: IPhoto): number {
  return a.Source.localeCompare(b.Source);
}

export const photosAdapter = createEntityAdapter<IPhoto>({
  selectId: selectPhotoId,
  sortComparer: sortBySource,
});

export const initialState: PhotosState = photosAdapter.getInitialState({
  selectedPhotoId: null,
  error: null,
  status: 'pending',
  categories: [],
});

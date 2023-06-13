import { PhotoTag } from '../lib/enums/photo-tag.enum';
import { IPhoto } from '../lib/interfaces/photo.interface';

export const taggy1: IPhoto = {
  Id: 'taggy1',
  Caption: 'Brand new taggies!',
  Source: 'taggy1.jpg',
  Tags: [PhotoTag.NewProducts],
  Orientation: 'landscape',
};

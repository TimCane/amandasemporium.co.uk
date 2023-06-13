import { PhotoTag } from '../lib/enums/photo-tag.enum';
import { IPhoto } from '../lib/interfaces/photo.interface';

export const hamper1: IPhoto = {
  Id: 'hamper1',
  Caption: '',
  Source: 'hamper1.jpg',
  Tags: [PhotoTag.JustDelivered],
  Orientation: 'landscape',
};

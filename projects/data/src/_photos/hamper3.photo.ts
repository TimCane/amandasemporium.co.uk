import { PhotoTag } from '../lib/enums/photo-tag.enum';
import { IPhoto } from '../lib/interfaces/photo.interface';

export const hamper3: IPhoto = {
  Id: 'hamper3',
  Caption: '',
  Source: 'hamper3.jpg',
  Tags: [PhotoTag.JustDelivered],
  Orientation: 'landscape',
};

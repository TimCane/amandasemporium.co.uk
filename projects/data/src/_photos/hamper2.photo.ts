import { PhotoTag } from '../lib/enums/photo-tag.enum';
import { IPhoto } from '../lib/interfaces/photo.interface';

export const hamper2: IPhoto = {
  Id: 'hamper2',
  Caption: '',
  Source: 'hamper2.jpg',
  Tags: [PhotoTag.JustDelivered],
  Orientation: 'landscape',
};

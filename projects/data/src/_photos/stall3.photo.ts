import { PhotoTag } from '../lib/enums/photo-tag.enum';
import { IPhoto } from '../lib/interfaces/photo.interface';

export const stall3: IPhoto = {
  Id: 'stall3',
  Caption: 'Mapledurham 2017',
  Source: 'stall3.jpg',
  Tags: [PhotoTag.Stall],
  Orientation: 'portrait',
};

import { PhotoTag } from '../lib/enums/photo-tag.enum';
import { IPhoto } from '../lib/interfaces/photo.interface';

export const stall1: IPhoto = {
  Id: 'stall1',
  Caption: 'Mapledurham 2017',
  Source: 'stall1.jpg',
  Tags: [PhotoTag.Stall],
  Orientation: 'landscape',
};

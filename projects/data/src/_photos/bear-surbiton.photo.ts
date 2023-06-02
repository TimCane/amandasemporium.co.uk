import { PhotoTag } from '../lib/enums/photo-tag.enum';
import { IPhoto } from '../lib/interfaces/photo.interface';

export const bearSurbiton: IPhoto = {
  Id: 'bear-surbiton',
  Caption: 'Bear Rehomed',
  Source: 'bear-surbiton.jpg',
  Tags: [PhotoTag.RehomedBears],
  Orientation: 'portrait',
};

import { PhotoTag } from '../lib/enums/photo-tag.enum';
import { IPhoto } from '../lib/interfaces/photo.interface';

export const bearXmas: IPhoto = {
  Id: 'bear-xmas',
  Caption: 'Christmas Bear',
  Source: 'bear-xmas.jpg',
  Tags: [PhotoTag.RehomedBears],
  Orientation: 'portrait',
};

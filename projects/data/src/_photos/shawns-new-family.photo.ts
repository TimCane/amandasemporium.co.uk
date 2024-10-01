import { PhotoTag } from '../lib/enums/photo-tag.enum';
import { IPhoto } from '../lib/interfaces/photo.interface';

export const shawnsNewFamily: IPhoto = {
  Id: 'shawns-new-family',
  Caption: 'Shawns new Family',
  Source: 'shawns-new-family.jpg',
  Tags: [PhotoTag.RehomedBears],
  Orientation: 'landscape',
};

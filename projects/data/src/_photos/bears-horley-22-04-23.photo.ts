import { PhotoTag } from '../lib/enums/photo-tag.enum';
import { IPhoto } from '../lib/interfaces/photo.interface';

export const bearsHorley220423: IPhoto = {
  Id: 'bears-horley-22-04-23',
  Caption: 'Bears enjoying their new home in Horley',
  Source: 'bears-horley-22-04-23.jpg',
  Tags: [PhotoTag.RehomedBears],
  Orientation: 'portrait',
};

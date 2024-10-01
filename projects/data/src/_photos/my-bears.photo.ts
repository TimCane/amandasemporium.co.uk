import { PhotoTag } from '../lib/enums/photo-tag.enum';
import { IPhoto } from '../lib/interfaces/photo.interface';

export const myBears: IPhoto = {
  Id: 'my-bears',
  Caption: 'My Bears',
  Source: 'my-bears.jpg',
  Tags: [PhotoTag.RehomedBears],
  Orientation: 'landscape',
};

import { PhotoTag } from '../lib/enums/photo-tag.enum';
import { IPhoto } from '../lib/interfaces/photo.interface';

export const buzzPeter: IPhoto = {
  Id: 'buzz-peter',
  Caption: 'Buzz & Peter rehomed',
  Source: 'buzz-peter.jpg',
  Tags: [PhotoTag.RehomedBears],
  Orientation: 'portrait',
};

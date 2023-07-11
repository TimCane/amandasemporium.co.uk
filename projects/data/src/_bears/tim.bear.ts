import { horsham } from '../_locations/horsham.location';
import { southsea } from '../_locations/southsea.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { valentineHeart } from './_brands/valentine-heart.bear-brand';
import { bear } from './_species/bear.bear-species';

export const tim: IBear = {
  Id: 'tim',
  Name: 'Tim',
  Description: ``,
  UploadedOn: new Date(2019, 6, 18),
  Info: {
    Brand: valentineHeart,
    Species: bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 4, 25),
  },
  Event: null,
  Rehomed: {
    Location: horsham,
    Date: new Date(2019, 6, 14),
  },
};

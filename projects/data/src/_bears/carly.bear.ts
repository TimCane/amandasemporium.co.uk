import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { shepperton } from '../_locations/shepperton.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const carly: IBear = {
  Id: 'carly',
  Name: 'Carly',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 6, 1),
  },
  Event: null,
  Rehomed: null,
};

import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { shepperton } from '../_locations/shepperton.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const isla: IBear = {
  Id: 'isla',
  Name: 'Isla',
  Description: ``,
  UploadedOn: new Date(2022, 11, 2),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2022, 9, 29),
  },
  Event: null,
  Rehomed: null,
};

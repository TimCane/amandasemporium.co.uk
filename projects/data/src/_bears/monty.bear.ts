import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { middleton } from '../_locations/middleton.location';
import { shepperton } from '../_locations/shepperton.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const monty: IBear = {
  Id: 'monty',
  Name: 'Monty',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2019, 7, 24),
  },
  Event: null,
  Rehomed: {
    Location: middleton,
    Date: new Date(2019, 11, 7),
  },
};

import { middleton } from '../_locations/middleton.location';
import { shepperton } from '../_locations/shepperton.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

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

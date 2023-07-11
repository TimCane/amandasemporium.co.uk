import { shepperton } from '../_locations/shepperton.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const ella: IBear = {
  Id: 'ella',
  Name: 'Ella',
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

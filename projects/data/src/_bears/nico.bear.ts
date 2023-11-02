import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { farnham } from '../_locations/farnham.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const nico: IBear = {
  Id: 'nico',
  Name: 'Nico',
  Description: ``,
  UploadedOn: new Date(2023, 10, 2),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: farnham,
    Date: new Date(2023, 7, 12),
  },
  Event: null,
  Rehomed: null,
};

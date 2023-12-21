import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { egham } from '../_locations/egham.location';
import { omagh } from '../_locations/omagh.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const lyla: IBear = {
  Id: 'lyla',
  Name: 'Lyla',
  Description: ``,
  UploadedOn: new Date(2023, 11, 21),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: egham,
    Date: new Date(2023, 9, 14),
  },
  Event: null,
  Rehomed: {
    Location: omagh,
    Date: new Date(2023, 11, 25),
  },
};

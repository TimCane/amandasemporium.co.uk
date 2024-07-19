import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { havant } from '../_locations/havant.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const coraline: IBear = {
  Id: 'coraline',
  Name: 'Coraline',
  Description: ``,
  UploadedOn: new Date(2024, 6, 19),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: havant,
    Date: new Date(2023, 3, 13),
  },
  Event: null,
  Rehomed: null,
};

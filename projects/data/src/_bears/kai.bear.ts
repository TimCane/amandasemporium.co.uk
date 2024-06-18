import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { sunbury } from '../_locations/sunbury.location';

export const kai: IBear = {
  Id: 'kai',
  Name: 'Kai',
  Description: ``,
  UploadedOn: new Date(2024, 5, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: sunbury,
    Date: new Date(2024, 0, 20),
  },
  Event: null,
  Rehomed: null
};

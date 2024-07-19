import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { suttonGreen } from '../_locations/suttonGreen.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const alan: IBear = {
  Id: 'alan',
  Name: 'Alan',
  Description: ``,
  UploadedOn: new Date(2024, 6, 19),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: suttonGreen,
    Date: new Date(2024, 6, 12),
  },
  Event: null,
  Rehomed: null,
};

import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { ashford } from '../_locations/ashford.location';
import { bracknell } from '../_locations/bracknell.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const rowan: IBear = {
  Id: 'rowan',
  Name: 'Rowan',
  Description: ``,
  UploadedOn: new Date(2019, 3, 7),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 0, 8),
  },
  Event: null,
  Rehomed: {
    Location: bracknell,
    Date: new Date(2019, 3, 20),
  },
};

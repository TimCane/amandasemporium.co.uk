import { ashford } from '../_locations/ashford.location';
import { bracknell } from '../_locations/bracknell.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

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

import { E20210731 } from '../_events/E2021-07-31.event';
import { barkham } from '../_locations/barkham.location';
import { binfield } from '../_locations/binfield.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const milly: IBear = {
  Id: 'milly',
  Name: 'Milly',
  Description: ``,
  UploadedOn: new Date(2021, 6, 16),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 1, 8),
  },
  Event: E20210731,
  Rehomed: {
    Location: barkham,
    Date: new Date(2021, 6, 31),
  },
};

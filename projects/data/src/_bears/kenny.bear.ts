import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20190525 } from '../_events/E2019-05-25.event';
import { chertsey } from '../_locations/chertsey.location';
import { taplow } from '../_locations/taplow.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const kenny: IBear = {
  Id: 'kenny',
  Name: 'Kenny',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2018, 5, 6),
  },
  Event: E20190525,
  Rehomed: {
    Location: taplow,
    Date: new Date(2019, 4, 25),
  },
};

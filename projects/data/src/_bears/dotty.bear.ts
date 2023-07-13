import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20190921 } from '../_events/E2019-09-21.event';
import { birdham } from '../_locations/birdham.location';
import { bordon } from '../_locations/bordon.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const dotty: IBear = {
  Id: 'dotty',
  Name: 'Dotty',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: birdham,
    Date: new Date(2019, 7, 24),
  },
  Event: E20190921,
  Rehomed: {
    Location: bordon,
    Date: new Date(2019, 8, 21),
  },
};

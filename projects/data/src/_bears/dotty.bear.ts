import { E20190921 } from '../_events/E2019-09-21.event';
import { birdham } from '../_locations/birdham.location';
import { bordon } from '../_locations/bordon.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

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

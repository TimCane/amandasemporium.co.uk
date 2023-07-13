import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20190928 } from '../_events/E2019-09-28.event';
import { bexhillOnSea } from '../_locations/bexhillOnSea.location';
import { ewell } from '../_locations/ewell.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const dudley: IBear = {
  Id: 'dudley',
  Name: 'Dudley',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: bexhillOnSea,
    Date: new Date(2019, 8, 14),
  },
  Event: E20190928,
  Rehomed: {
    Location: ewell,
    Date: new Date(2019, 8, 28),
  },
};

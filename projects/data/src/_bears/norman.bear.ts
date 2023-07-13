import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20180610 } from '../_events/E2018-06-10.event';
import { burnham } from '../_locations/burnham.location';
import { minsterLovell } from '../_locations/minsterLovell.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const norman: IBear = {
  Id: 'norman',
  Name: 'Norman',
  Description: ``,
  UploadedOn: new Date(2018, 5, 11),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: burnham,
    Date: new Date(2018, 4, 26),
  },
  Event: E20180610,
  Rehomed: {
    Location: minsterLovell,
    Date: new Date(2018, 5, 10),
  },
};

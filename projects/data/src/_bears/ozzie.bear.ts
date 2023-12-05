import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20231126 } from '../_events/E2023-11-26.event';
import { egham } from '../_locations/egham.location';
import { odiham } from '../_locations/odiham.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const ozzie: IBear = {
  Id: 'ozzie',
  Name: 'Ozzie',
  Description: ``,
  UploadedOn: new Date(2023, 10, 2),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: egham,
    Date: new Date(2023, 9, 14),
  },
  Event: E20231126,
  Rehomed: {
    Location: odiham,
    Date: new Date(2023, 10, 26),
  },
};

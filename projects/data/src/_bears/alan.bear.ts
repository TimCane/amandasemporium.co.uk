import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20240810 } from '../_events/E2024-08-10.event';
import { farnham } from '../_locations/farnham.location';
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
  Event: E20240810,
  Rehomed: {
    Location: farnham,
    Date: new Date(2024, 7, 10)
  },
};

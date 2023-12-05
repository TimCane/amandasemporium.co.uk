import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20231126 } from '../_events/E2023-11-26.event';
import { basingstoke } from '../_locations/basingstoke.location';
import { farnham } from '../_locations/farnham.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const nico: IBear = {
  Id: 'nico',
  Name: 'Nico',
  Description: ``,
  UploadedOn: new Date(2023, 10, 2),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: farnham,
    Date: new Date(2023, 7, 12),
  },
  Event: E20231126,
  Rehomed: {
    Location: basingstoke,
    Date: new Date(2023, 10, 26),
  },
};

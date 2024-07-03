import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { rabbit } from '../_bear-species/rabbit.bear-species';
import { E20240629 } from '../_events/E2024-06-29.event';
import { farnham } from '../_locations/farnham.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const zoe: IBear = {
  Id: 'zoe',
  Name: 'Zoe',
  Description: ``,
  UploadedOn: new Date(2023, 10, 2),
  Info: {
    Brand: buildABear,
    Species: rabbit,
  },
  Rescued: {
    Location: farnham,
    Date: new Date(2023, 7, 12),
  },
  Event: E20240629,
  Rehomed: {
    Location: farnham,
    Date: new Date(2024,5,29)
  },
};

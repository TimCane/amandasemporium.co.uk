import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20240629 } from '../_events/E2024-06-29.event';
import { farnham } from '../_locations/farnham.location';
import { jacobsWell } from '../_locations/jacobsWell.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const barbie: IBear = {
  Id: 'barbie',
  Name: 'Barbie',
  Description: ``,
  UploadedOn: new Date(2023, 10, 2),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: jacobsWell,
    Date: new Date(2023, 8, 17),
  },
  Event: E20240629,
  Rehomed: {
    Location: farnham,
    Date: new Date(2024,5,29)
  },
};

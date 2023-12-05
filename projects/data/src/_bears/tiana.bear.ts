import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20231124 } from '../_events/E2023-11-24.event';
import { holybourne } from '../_locations/holybourne.location';
import { jacobsWell } from '../_locations/jacobsWell.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const tiana: IBear = {
  Id: 'tiana',
  Name: 'Tiana',
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
  Event: E20231124,
  Rehomed: {
    Location: holybourne,
    Date: new Date(2023, 10, 24),
  },
};

import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { jacobsWell } from '../_locations/jacobsWell.location';
import { longDitton } from '../_locations/longDitton.location';
import { E20240928 } from '../_events/E2024-09-28.event';

export const neville: IBear = {
  Id: 'neville',
  Name: 'Neville',
  Description: ``,
  UploadedOn: new Date(2024, 6, 19),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: jacobsWell,
    Date: new Date(2024, 5, 4),
  },
  Event: E20240928,
  Rehomed: {
    Location: longDitton,
    Date: new Date(2024, 8, 28),
  },
};

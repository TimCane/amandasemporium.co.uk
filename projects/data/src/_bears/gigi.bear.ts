import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20240721 } from '../_events/E2024-07-21.event';
import { andover } from '../_locations/andover.location';
import { farnham } from '../_locations/farnham.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const gigi: IBear = {
  Id: 'gigi',
  Name: 'Gigi',
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
  Event: E20240721,
  Rehomed: {
    Date: new Date(2024,5,21),
    Location: andover
  },
};

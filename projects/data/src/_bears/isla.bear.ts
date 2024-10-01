import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { shepperton } from '../_locations/shepperton.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { chessington } from '../_locations/chessington.location';
import { E20240928 } from '../_events/E2024-09-28.event';

export const isla: IBear = {
  Id: 'isla',
  Name: 'Isla',
  Description: ``,
  UploadedOn: new Date(2022, 11, 2),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2022, 9, 29),
  },
  Event: E20240928,
  Rehomed: {
    Location: chessington,
    Date: new Date(2024, 8, 28),
  },
};

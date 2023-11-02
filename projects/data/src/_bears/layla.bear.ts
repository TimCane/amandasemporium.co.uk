import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20230923 } from '../_events/E2023-09-23.event';
import { chessington } from '../_locations/chessington.location';
import { shepperton } from '../_locations/shepperton.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const layla: IBear = {
  Id: 'layla',
  Name: 'Layla',
  Description: ``,
  UploadedOn: new Date(2023, 5, 20),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 5, 3),
  },
  Event: E20230923,
  Rehomed: {
    Location: chessington,
    Date: new Date(2023, 8, 23),
  },
};

import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20190928 } from '../_events/E2019-09-28.event';
import { birdham } from '../_locations/birdham.location';
import { chessington } from '../_locations/chessington.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const bobby: IBear = {
  Id: 'bobby',
  Name: 'Bobby',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: birdham,
    Date: new Date(2019, 7, 24),
  },
  Event: E20190928,
  Rehomed: {
    Location: chessington,
    Date: new Date(2019, 8, 28),
  },
};

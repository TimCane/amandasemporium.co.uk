import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20220924 } from '../_events/E2022-09-24.event';
import { chessington } from '../_locations/chessington.location';
import { selsey } from '../_locations/selsey.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const harper: IBear = {
  Id: 'harper',
  Name: 'Harper',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: selsey,
    Date: new Date(2022, 4, 28),
  },
  Event: E20220924,
  Rehomed: {
    Location: chessington,
    Date: new Date(2022, 8, 24),
  },
};

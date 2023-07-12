import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20210925 } from '../_events/E2021-09-25.event';
import { chessington } from '../_locations/chessington.location';
import { cobham } from '../_locations/cobham.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const pete: IBear = {
  Id: 'pete',
  Name: 'Pete',
  Description: ``,
  UploadedOn: new Date(2019, 11, 12),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: E20210925,
  Rehomed: {
    Location: chessington,
    Date: new Date(2021, 8, 25),
  },
};

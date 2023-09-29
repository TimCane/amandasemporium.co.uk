import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { koala } from '../_bear-species/koala.bear-species';
import { E20230923 } from '../_events/E2023-09-23.event';
import { addlestone } from '../_locations/addlestone.location';
import { chessington } from '../_locations/chessington.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const scarlett: IBear = {
  Id: 'scarlett',
  Name: 'Scarlett',
  Description: ``,
  UploadedOn: new Date(2023, 5, 20),
  Info: {
    Brand: buildABear,
    Species: koala,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2021, 10, 6),
  },
  Event: E20230923,
  Rehomed: {
    Location: chessington,
    Date: new Date(2023, 8, 23),
  },
};

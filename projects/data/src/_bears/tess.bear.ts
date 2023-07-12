import { morrisons } from '../_brands/morrisons.bear-brand';
import { E20210925 } from '../_events/E2021-09-25.event';
import { chessington } from '../_locations/chessington.location';
import { chicester } from '../_locations/chicester.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const tess: IBear = {
  Id: 'tess',
  Name: 'Tess',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Info: {
    Brand: morrisons,
    Species: bear,
  },
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 9, 6),
  },
  Event: E20210925,
  Rehomed: {
    Location: chessington,
    Date: new Date(2021, 8, 25),
  },
};

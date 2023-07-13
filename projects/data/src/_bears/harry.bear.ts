import { whsmith } from '../_bear-brands/whsmith.bear-brand';
import { sunbury } from '../_locations/sunbury.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const harry: IBear = {
  Id: 'harry',
  Name: 'Harry',
  Description: ``,
  UploadedOn: new Date(2019, 4, 24),
  Info: {
    Brand: whsmith,
    Species: bear,
  },
  Rescued: {
    Location: tonbridge,
    Date: new Date(2019, 8, 13),
  },
  Event: null,
  Rehomed: {
    Location: sunbury,
    Date: new Date(2020, 3, 27),
  },
};

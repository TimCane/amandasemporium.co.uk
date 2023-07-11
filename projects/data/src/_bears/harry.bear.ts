import { sunbury } from '../_locations/sunbury.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { whsmith } from './_brands/whsmith.bear-brand';
import { bear } from './_species/bear.bear-species';

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

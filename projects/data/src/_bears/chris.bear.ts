import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { bognor } from '../_locations/bognor.location';
import { weybridge } from '../_locations/weybridge.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const chris: IBear = {
  Id: 'chris',
  Name: 'Chris',
  Description: ``,
  UploadedOn: new Date(2019, 4, 31),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: weybridge,
    Date: new Date(2019, 2, 29),
  },
  Event: null,
  Rehomed: {
    Location: bognor,
    Date: new Date(2019, 6, 14),
  },
};

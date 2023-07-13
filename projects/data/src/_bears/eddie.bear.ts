import { funtastic } from '../_bear-brands/funtastic.bear-brand';
import { guildford } from '../_locations/guildford.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const eddie: IBear = {
  Id: 'eddie',
  Name: 'Eddie',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Info: {
    Brand: funtastic,
    Species: bear,
  },
  Rescued: {
    Location: tonbridge,
    Date: new Date(2019, 8, 13),
  },
  Event: null,
  Rehomed: {
    Location: guildford,
    Date: new Date(2019, 11, 13),
  },
};

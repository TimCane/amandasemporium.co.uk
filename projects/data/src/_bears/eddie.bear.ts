import { guildford } from '../_locations/guildford.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { funtastic } from './_brands/funtastic.bear-brand';
import { bear } from './_species/bear.bear-species';

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

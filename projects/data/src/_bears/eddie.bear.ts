import { guildford } from '../_locations/guildford.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const eddie: IBear = {
  Id: 'eddie',
  Name: 'Eddie',
  Type: BearType.Funtastic,
  Rescued: {
    Location: tonbridge,
    Date: new Date(2019, 9, 13),
  },
  Sold: null,
  Rehomed: {
    Location: guildford,
    Date: new Date(2019, 12, 13),
  },
};

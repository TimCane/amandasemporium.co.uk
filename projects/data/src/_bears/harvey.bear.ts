import { send } from '../_locations/send.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const harvey: IBear = {
  Id: 'harvey',
  Name: 'Harvey',
  Type: BearType.BuildABear,
  Rescued: {
    Location: tonbridge,
    Date: new Date(2019, 9, 13),
  },
  Sold: null,
  Rehomed: {
    Location: send,
    Date: new Date(2019, 12, 1),
  },
};

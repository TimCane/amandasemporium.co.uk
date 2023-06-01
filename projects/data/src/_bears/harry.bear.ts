import { sunbury } from '../_locations/sunbury.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const harry: IBear = {
  Id: 'harry',
  Name: 'Harry',
  Type: BearType.WHSmithBear,
  Rescued: {
    Location: tonbridge,
    Date: new Date(2019, 9, 13),
  },
  Sold: null,
  Rehomed: {
    Location: sunbury,
    Date: new Date(2020, 4, 27),
  },
};

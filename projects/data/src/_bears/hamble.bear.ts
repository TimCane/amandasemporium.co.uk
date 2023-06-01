import { farnham } from '../_locations/farnham.location';
import { kingsbridge } from '../_locations/kingsbridge.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const hamble: IBear = {
  Id: 'hamble',
  Name: 'Hamble',
  Type: BearType.BuildABear,
  Rescued: {
    Location: kingsbridge,
    Date: new Date(2019, 6, 12),
  },
  Sold: null,
  Rehomed: {
    Location: farnham,
    Date: new Date(2019, 8, 17),
  },
};

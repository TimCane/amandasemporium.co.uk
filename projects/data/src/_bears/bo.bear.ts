import { portsmouth } from '../_locations/portsmouth.location';
import { titchfield } from '../_locations/titchfield.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bo: IBear = {
  Id: 'bo',
  Name: 'Bo',
  Type: BearType.BuildABear,
  Rescued: {
    Location: titchfield,
    Date: new Date(2018, 4, 21),
  },
  Sold: null,
  Rehomed: {
    Location: portsmouth,
    Date: new Date(2018, 5, 6),
  },
};

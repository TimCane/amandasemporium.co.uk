import { romsey } from '../_locations/romsey.location';
import { woking } from '../_locations/woking.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const terry: IBear = {
  Id: 'terry',
  Name: 'Terry',
  Type: BearType.BuildABear,
  Rescued: {
    Location: romsey,
    Date: new Date(2019, 8, 2),
  },
  Sold: null,
  Rehomed: {
    Location: woking,
    Date: new Date(2020, 5, 10),
  },
};

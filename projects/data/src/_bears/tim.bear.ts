import { horsham } from '../_locations/horsham.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tim: IBear = {
  Id: 'tim',
  Name: 'Tim',
  Type: BearType.ValentineHeartBear,
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 5, 25),
  },
  Sold: null,
  Rehomed: {
    Location: horsham,
    Date: new Date(2019, 7, 14),
  },
};

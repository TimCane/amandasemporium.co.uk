import { burnham } from '../_locations/burnham.location';
import { minsterLovell } from '../_locations/minsterLovell.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const norman: IBear = {
  Id: 'norman',
  Name: 'Norman',
  Type: BearType.BuildABear,
  Rescued: {
    Location: burnham,
    Date: new Date(2018, 5, 26),
  },
  Sold: null,
  Rehomed: {
    Location: minsterLovell,
    Date: new Date(2018, 6, 10),
  },
};

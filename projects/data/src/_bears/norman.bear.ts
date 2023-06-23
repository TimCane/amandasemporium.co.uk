import { burnham } from '../_locations/burnham.location';
import { minsterLovell } from '../_locations/minsterLovell.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const norman: IBear = {
  Id: 'norman',
  Name: 'Norman',
  UploadedOn: new Date(2018, 5, 11),
  Type: BearType.BuildABear,
  Rescued: {
    Location: burnham,
    Date: new Date(2018, 4, 26),
  },
  Sold: null,
  Rehomed: {
    Location: minsterLovell,
    Date: new Date(2018, 5, 10),
  },
};

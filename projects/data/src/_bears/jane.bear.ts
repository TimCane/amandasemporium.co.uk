import { ruislip } from '../_locations/ruislip.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jane: IBear = {
  Id: 'jane',
  Name: 'Jane',
  Type: BearType.BuildABear,
  Rescued: {
    Location: ruislip,
    Date: new Date(2020, 8, 20),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 9, 24),
  },
};

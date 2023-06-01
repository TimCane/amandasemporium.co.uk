import { eastGrinstead } from '../_locations/eastGrinstead.location';
import { kingston } from '../_locations/kingston.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tilly: IBear = {
  Id: 'tilly',
  Name: 'Tilly',
  Type: BearType.BearFactory,
  Rescued: {
    Location: eastGrinstead,
    Date: new Date(2020, 3, 9),
  },
  Sold: null,
  Rehomed: {
    Location: kingston,
    Date: new Date(2021, 9, 25),
  },
};

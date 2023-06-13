import { bexhillOnSea } from '../_locations/bexhillOnSea.location';
import { ewell } from '../_locations/ewell.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const dudley: IBear = {
  Id: 'dudley',
  Name: 'Dudley',
  Type: BearType.BuildABear,
  Rescued: {
    Location: bexhillOnSea,
    Date: new Date(2019, 9, 14),
  },
  Sold: null,
  Rehomed: {
    Location: ewell,
    Date: new Date(2019, 9, 28),
  },
};

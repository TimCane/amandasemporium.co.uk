import { kingston } from '../_locations/kingston.location';
import { selsey } from '../_locations/selsey.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const princess: IBear = {
  Id: 'princess',
  Name: 'Princess',
  Type: BearType.BuildABear,
  Rescued: {
    Location: selsey,
    Date: new Date(2022, 5, 28),
  },
  Sold: null,
  Rehomed: {
    Location: kingston,
    Date: new Date(2022, 9, 24),
  },
};

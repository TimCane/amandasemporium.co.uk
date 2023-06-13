import { chichester } from '../_locations/chichester.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const billy: IBear = {
  Id: 'billy',
  Name: 'Billy',
  Type: BearType.BuildABear,
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 5, 14),
  },
  Sold: null,
  Rehomed: null,
};

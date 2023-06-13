import { chichester } from '../_locations/chichester.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const hugo: IBear = {
  Id: 'hugo',
  Name: 'Hugo',
  Type: BearType.BuildABear,
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 9, 10),
  },
  Sold: null,
  Rehomed: null,
};

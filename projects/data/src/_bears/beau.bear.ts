import { alton } from '../_locations/alton.location';
import { chicester } from '../_locations/chicester.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const beau: IBear = {
  Id: 'beau',
  Name: 'Beau',
  Type: BearType.BuildABear,
  Rescued: {
    Location: chicester,
    Date: new Date(2022, 6, 18),
  },
  Sold: null,
  Rehomed: {
    Location: alton,
    Date: new Date(2023, 5, 17),
  },
};

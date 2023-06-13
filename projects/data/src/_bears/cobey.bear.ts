import { chertsey } from '../_locations/chertsey.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cobey: IBear = {
  Id: 'cobey',
  Name: 'Cobey',
  Type: BearType.BuildABear,
  Rescued: {
    Location: chertsey,
    Date: new Date(2020, 6, 1),
  },
  Sold: null,
  Rehomed: null,
};

import { chertsey } from '../_locations/chertsey.location';
import { miltonKeynes } from '../_locations/miltonKeynes.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bob: IBear = {
  Id: 'bob',
  Name: 'Bob',
  Type: BearType.KeelCubbyBear,
  Rescued: {
    Location: chertsey,
    Date: new Date(2019, 1, 17),
  },
  Sold: null,
  Rehomed: {
    Location: miltonKeynes,
    Date: new Date(2019, 5, 25),
  },
};

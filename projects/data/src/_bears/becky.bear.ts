import { chertsey } from '../_locations/chertsey.location';
import { farnham } from '../_locations/farnham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const becky: IBear = {
  Id: 'becky',
  Name: 'Becky',
  Type: BearType.GiorgioBear,
  Rescued: {
    Location: chertsey,
    Date: new Date(2019, 3, 29),
  },
  Sold: null,
  Rehomed: {
    Location: farnham,
    Date: new Date(2019, 8, 17),
  },
};

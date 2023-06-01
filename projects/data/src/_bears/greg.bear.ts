import { bognor } from '../_locations/bognor.location';
import { clapham } from '../_locations/clapham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const greg: IBear = {
  Id: 'greg',
  Name: 'Greg',
  Type: BearType.CuddlesCollection,
  Rescued: {
    Location: bognor,
    Date: new Date(2018, 6, 30),
  },
  Sold: null,
  Rehomed: {
    Location: clapham,
    Date: new Date(2018, 11, 22),
  },
};

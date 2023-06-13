import { chertsey } from '../_locations/chertsey.location';
import { horsham } from '../_locations/horsham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const isobel: IBear = {
  Id: 'isobel',
  Name: 'Isobel',
  Type: BearType.CuddlesCollection,
  Rescued: {
    Location: chertsey,
    Date: new Date(2019, 3, 29),
  },
  Sold: null,
  Rehomed: {
    Location: horsham,
    Date: new Date(2019, 10, 19),
  },
};

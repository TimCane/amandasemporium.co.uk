import { chertsey } from '../_locations/chertsey.location';
import { farnham } from '../_locations/farnham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const nina: IBear = {
  Id: 'nina',
  Name: 'Nina',
  Type: BearType.RussBear,
  Rescued: {
    Location: chertsey,
    Date: new Date(2022, 5, 6),
  },
  Sold: null,
  Rehomed: {
    Location: farnham,
    Date: new Date(2022, 8, 20),
  },
};

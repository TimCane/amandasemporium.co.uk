import { addlestone } from '../_locations/addlestone.location';
import { leatherhead } from '../_locations/leatherhead.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const baaabara: IBear = {
  Id: 'baaabara',
  Name: 'Baaabara',
  Type: BearType.BuildABear,
  Rescued: {
    Location: addlestone,
    Date: new Date(2019, 11, 14),
  },
  Sold: null,
  Rehomed: {
    Location: leatherhead,
    Date: new Date(2022, 4, 23),
  },
};

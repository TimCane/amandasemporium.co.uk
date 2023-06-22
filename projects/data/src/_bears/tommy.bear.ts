import { chichester } from '../_locations/chichester.location';
import { woking } from '../_locations/woking.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tommy: IBear = {
  Id: 'tommy',
  Name: 'Tommy',
  Type: BearType.BuildABear,
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 5, 21),
  },
  Sold: null,
  Rehomed: {
    Location: woking,
    Date: new Date(2022, 11, 4),
  },
};

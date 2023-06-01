import { emworth } from '../_locations/emworth.location';
import { woking } from '../_locations/woking.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const drake: IBear = {
  Id: 'drake',
  Name: 'Drake',
  Type: BearType.BuildABear,
  Rescued: {
    Location: emworth,
    Date: new Date(2018, 7, 7),
  },
  Sold: null,
  Rehomed: {
    Location: woking,
    Date: new Date(2019, 12, 1),
  },
};

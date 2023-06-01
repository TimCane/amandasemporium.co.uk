import { bridgemary } from '../_locations/bridgemary.location';
import { woking } from '../_locations/woking.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const rufus: IBear = {
  Id: 'rufus',
  Name: 'Rufus',
  Type: BearType.BuildABear,
  Rescued: {
    Location: bridgemary,
    Date: new Date(2019, 6, 2),
  },
  Sold: null,
  Rehomed: {
    Location: woking,
    Date: new Date(2019, 11, 30),
  },
};

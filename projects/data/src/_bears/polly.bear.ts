import { dorchester } from '../_locations/dorchester.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const polly: IBear = {
  Id: 'polly',
  Name: 'Polly',
  Type: BearType.BuildABear,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 10, 13),
  },
  Sold: null,
  Rehomed: {
    Location: dorchester,
    Date: new Date(2019, 6, 2),
  },
};
